import React from 'react'

const ParaGenerator = () => {
    const [para, setPara] = React.useState("");
    const [loading,setLoading]=React.useState(false);
  return (
    <div>
        <div className='mainBody' style={{
            display:'flex',
            flexDirection:'column',
            marginTop:'10%',
            marginLeft:'15%',
            marginRight:'15%',
            height:'100vh',
            
        }}>
            <div className='Heading' style={{
                display:'flex',
                justifyContent:'center'
            }}>
                <h2> Para Generator</h2>
            </div>
            <div
                style={{
                   margin:'5%'   
                }}
            >
                <ParaGeneratorFunc setPara={setPara} setLoading={setLoading}/>
            </div>
            <Result para={para} loading={loading}/>
        </div>
       
    </div>
  )
}

const ParaGeneratorFunc = ({setPara,setLoading}) => {
    const [wordlength,setWordLength]=React.useState(0)
    const fetchPara=async()=>{
        setLoading(true)
        const result=await fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${wordlength}&start-with-lorem=1`)
        const data=await result.json()
      console.log('data',data)
      setPara(data)
      setLoading(false)
    }
    return(
       <div>
         <input type='number' placeholder='Enter Number of Words' onChange={(e)=>setWordLength(e.target.value)}
         style={{
            padding:'15px',
            width:'70%',
            borderRadius:'5px'
         }} />
         <button style={{
            padding:'15px',
            borderRadius:'10px',
            marginLeft:'10px',
            color:'#fff',
            backgroundColor:'#000',
         }} onClick={fetchPara}> Generate</button>
       </div>
    )
}

const Result=({para,loading})=>{
    return(
        <>
        {loading?'Lodaing...':para}
        
        </>
    )
}

export default ParaGenerator