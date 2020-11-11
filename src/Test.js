import React, { useEffect, useState } from "react";


const Test = () => {

    const [my, setMy] = useState(null);
    useEffect (() => {
        // setChartData(mockChartData);
  
        setMy("hello");
  
      }, []);
    return (
        
            <div>
                <p>TESTING {my} </p>
            </div>
        
    );
}

export default Test;