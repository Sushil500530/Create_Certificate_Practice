/* eslint-disable react/prop-types */
import { Page, Text, Image, Document, View } from '@react-pdf/renderer';
import './pdf.css'
// import {useEffect, useState } from 'react';
function PDF({anotherName}) {
    // const [name, setName] = useState('')
  console.log('another name is ------->', anotherName);
    // useEffect(() => {
    //     const findName = localStorage.getItem('name');
    //     setName(findName)
    // }, [])
 
    return (
        <Document>
            <Page size="A4">
                <View style={{ position: 'relative', overflow: 'hidden' }}>
                    {/* <div id='certificate'> */}
                    <Text style={{ position: "absolute", top: '380px', right: 0, left: 100, zIndex: 1, fontSize: '60px', textTransform: 'capitalize', fontWeight: 'bold' }} >{anotherName}</Text>
                    <Image src='https://i.ibb.co/3yMGWhT/certificate-new.png' style={{ width: '600', height: '800', zIndex: 3 }} />
                    {/* </div> */}
                </View>
            </Page>
        </Document>
    )
}
export default PDF
