import * as React from 'react';
import "./Tabs.css";

const buttonStyle = (selectedTabIndex, index) => {
    const buttonColor = selectedTabIndex === index ? "tabs-button" : "";
    return  `text-left text-lg p-1 ${buttonColor}` 
}

function TabsList({tabsContent, selectedTab, onClick}){
    return (
        <div className="pr-4 flex flex-col">
            {tabsContent.map((content, index) => { 
                return (
                    <button 
                        className={buttonStyle(selectedTab, index)} 
                        onClick={() => {onClick(index)}}>
                        {content.name}
                    </button>
                    )
                }
            )
            
            }
        </div>
    )
}

/**
 * tabsContent: {
 *      name: string
 *      contents: string []
 * }
 */
export function Tabs({tabsContent}) {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const workDateStr = tabsContent[selectedTab].endDate ? 
        `${tabsContent[selectedTab].startDate} to ${tabsContent[selectedTab].endDate}` :
        `${tabsContent[selectedTab].startDate} to present`
    return(
        <div className="flex w-full py-2">
            <TabsList 
                tabsContent={tabsContent}
                onClick={(tabIndex) => setSelectedTab(tabIndex)}
                selectedTab={selectedTab}
            />
            <div>
                <h1 className="text-2xl font-medium">
                    {`${tabsContent[selectedTab].role} `}
                    <span className="font-semibold">
                     {`@ ${tabsContent[selectedTab].name}`}
                    </span>
                </h1>
                <div>
                    {workDateStr}
                </div>
                <ul className="flex flex-col pl-4 pt-4">
                    {tabsContent[selectedTab].contents.map((content) => {
                        return (
                            <li className="list-disc text-left">
                                {content}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
