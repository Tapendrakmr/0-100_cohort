import React from 'react'

const BackgroundChanger = () => {
    const [bgColour,setBgColour]=React.useState('white')

    const changeBgColour = (color) => {
        console.log('color',color)
        setBgColour(color)
    }
  return (
    <div style={{ minHeight: '100vh', position: 'relative',backgroundColor:bgColour }} >
        <div className='footer' style={{
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid black',
            position: 'absolute',
            left: '0',
            bottom: '10%',
            width: '100%',
            backgroundColor: 'white',
            }}>
       <ColourChooser colourName="Red" colourCode='#FF0000' onClick={changeBgColour}/>
        <ColourChooser colourName="Yellow" colourCode='#FFFF00' onClick={changeBgColour}/>
        <ColourChooser colourName="Black" colourCode='#000000' onClick={changeBgColour}/>
        <ColourChooser colourName="Purple" colourCode='#800080' onClick={changeBgColour}/>
        <ColourChooser colourName="Green" colourCode='#008000' onClick={changeBgColour}/>
        <ColourChooser colourName="Blue" colourCode='#0000FF' onClick={changeBgColour}/>
        <ColourChooser colourName="Orange" colourCode='#FFA500' onClick={changeBgColour}/>
        </div>
      
    </div>
  )
}

const ColourChooser=({colourName,colourCode = '#ffffff',onClick})=>{
    return(
        <>
            <div style={{backgroundColor:colourCode,margin:'5px',padding:'5px', borderRadius:'12%' ,border:'1px solid black',cursor:'pointer',color:colourCode=='#000'?'#fff':'#000'}}
                onClick={()=>{onClick(colourCode)}}>
                {colourName}
            </div>
        </>
    )
}
export default BackgroundChanger