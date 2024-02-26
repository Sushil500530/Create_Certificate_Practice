/* eslint-disable react/prop-types */
import { Page, Text, Image, Document, View } from '@react-pdf/renderer';
import certificateImage from '../../assets/certificate.png';
import './pdf.css'
function PDF() {
    
   const findName = localStorage.getItem('name');
   console.log('finding this name is====>', findName);
    return (
        <Document>
            <Page size="A4">
                <View style={{position:'relative', overflow:'hidden'}}>
                    {/* <div id='certificate'> */}
                        <Text style={{position:"absolute", top:'380px', right:'0', zIndex:1, left:'80px', fontSize:'60px', textTransform:'capitalize',fontWeight:'bold'}} >{findName}</Text>
                        <Image src={certificateImage} style={{ width: '600', height: '800', zIndex:3 }} />
                    {/* </div> */}
                </View>
            </Page>
        </Document>
    )
}
export default PDF
