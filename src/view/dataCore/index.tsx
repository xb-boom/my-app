import React from "react";
import './index.scss'
import { AEchars, BEchars } from '../../component/charts/columnar'

function DataCore() {
    return (
        <>
            <div className="orderDataGrid">
                <AEchars />
                <BEchars />
            </div>
        </>
    )
}

export default DataCore