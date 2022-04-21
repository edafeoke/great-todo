import React from "react";

const AppBar = () => {
  return (
    <div style={{
        borderBottomColor:'#f00',
        margin:0,
        borderBottomWidth:2,
    }}>
      <h1 style={{
          color:'#777',
          textAlign:'center',
          padding:5,
          margin:10,
          fontWeight:'bold',
          textShadow:'2px 2px 52px #333',
          fontSize:72,
          fontFamily:'serif'
      }}>Todo</h1>
    </div>
  );
};
export default AppBar;
