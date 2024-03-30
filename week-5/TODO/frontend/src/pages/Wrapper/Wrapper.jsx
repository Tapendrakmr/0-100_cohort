// import React from 'react'

const Wrapper = () => {
  return (
   <>
    <CardWrapper title='title'>
       <TestComp>
            <div>hi bhabhi</div>
       </TestComp>
    </CardWrapper>
    <CardWrapper>
        <div>
           Are bhai kha h tu
        </div>
    </CardWrapper>
   </>
  )
}

const TestComp=({children})=>{
    console.log('sdfsdfsd')
    return(
        <div style={{backgroundColor:"gray",fontSize:16,fontStyle:"italic"}}>
            {children}
        </div>
    )
}

const CardWrapper=({children,title})=>{
    console.log('poierwerwe',title,children)
    return(
        <div style={{border:'1px solid black',padding :10}}>
            {children}
        </div>
    )
}

export default Wrapper