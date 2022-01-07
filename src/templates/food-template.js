import React from "react";
import { PageTemplate } from './../components/PageTemplate';

export default function FoodTemplate({pageContext: {food}}) {
    const {
        restaurantName,

    } =  food;

    console.log(food);
    return(
        <PageTemplate>
                <title>{`${restaurantName} Review`}</title>
        </PageTemplate>
    )
}
