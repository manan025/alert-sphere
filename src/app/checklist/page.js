import React from 'react';
import Earthquake from "@/components/disasters/Earthquake";
import Flood from "@/components/disasters/Flood";

const Page = (props) => {
    const {disaster} = props
    return (
        <div>
            <h1>Checklist</h1>
            if (disaster == "earthquake") {
            <Earthquake />
            } else {
            <Flood />
        }
        </div>
    );
};

export default Page;