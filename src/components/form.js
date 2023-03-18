import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from 'antd';
import { Select, Button } from 'antd';
import { Option } from 'antd/es/mentions';
import { useSelector } from 'react-redux';
import '../App.css';
function RegionSelector() {
    const dispatch = useDispatch();
    const [selectedRegion, setSelectedRegion] = useState('United Kingdom');

    let data;
    let data2;
    let country;

    const countryD = useSelector(state => (state.data));
    const countryN = useSelector(state => (state.country));
    const handleDropdownChange = (value) => {
        setSelectedRegion(value);
    };
    const handleLoadClick = () => {
        switch (selectedRegion) {
            case 'United States':
                data2 = ('Currency symbol: $ (US Dollar) Units of speed: mph (miles per hour) Units of distance: miles Units of volume: gallons Timezones: There are multiple timezones in the USA, including Eastern Time (ET), Central Time (CT), Mountain Time (MT), and Pacific Time (PT). The timezones vary from UTC-4 (ET) to UTC-8 (PT) depending on the location.')
                data = [39.8283, -98.5795];
                country = 'United States';
                break;
            case 'India':
                data = [28.6139, 77.2090];
                data2 = ('Currency symbol: ₹ (Indian Rupee) Units of speed: km / h(kilometers per hour) Units of distance: km(kilometers) Units of volume: L(liters) Timezone: India Standard Time(IST)(UTC + 5: 30)')
                country = 'India';
                break;
            case 'United Kingdom':
                data = [51.505, -0.09];
                data2 = ('Currency symbol: £ (British Pound) Units of speed: mph (miles per hour) Units of distance: miles Units of volume: litres Timezone: Greenwich Mean Time (GMT) (UTC+0) in winter, and British Summer Time (BST) (UTC+1) in summer')
                country = 'United Kingdom';
                break;

            default:
                break;
        }
        dispatch({ type: 'SET_INFO', payload: data });
        dispatch({ type: 'SET_COUNTRY_DATA', payload: data2 });
        dispatch({ type: 'SET_COUNTRY', payload: country });
    };

    return (
        <div className="region-selector-container">
            <div style={{ marginLeft: '50px' }} className="container">
                <Select style={{ width: "155px" }} value={selectedRegion} onChange={handleDropdownChange}>
                    <Option value="United Kingdom">United Kingdom</Option>
                    <Option value="United States">United States</Option>
                    <Option value="India">India</Option>
                </Select>
                <Button onClick={handleLoadClick}>Load</Button>
            </div>
            <Card title={countryN} style={{ marginLeft: '50px', width: 300, height: 300, overflow: 'hidden' }}>
                <p>{countryD}</p>
            </Card>
        </div>
    );
}

export default RegionSelector;
