import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import ImageMy from './imga.jpg';

// Define styles for the components
const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 20,
        border: '1px solid #ccc',
    },
    page: {
        // display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: '10px',
        fontWeight: 700
    }
});


// Define the main PDF component
const MyPDF = ({ cards }) => (
    <Document>
        {cards.reduce((pages, card, index) => {
            const pageIndex = Math.floor(index / 4);

            if (!pages[pageIndex]) {
                pages[pageIndex] = [];
            }

            pages[pageIndex].push(
                <CardComponent
                    key={index}
                    title={card.title}
                    description={card.description}
                />
            );

            return pages;
        }, []).map((page, index) => (
            <Page key={index} size="A4" style={{ backgroundColor: 'rgb(240 244 246)' }} >
                {
                    index == 0 &&
                    <View style={styles.page}>
                        <View style={{ marginLeft: '10px' }}>
                            <Text>tagbox</Text>
                        </View>
                        <View style={styles.textStyle}>
                            <Text>Widget Analytics Report</Text>
                            <Text>Date Range: 08-11-2023 to 07-12-2023</Text>
                        </View>
                    </View>
                }
                <View style={{ backgroundColor: '#FFFFFF', margin: 20 }}><Text style={{ padding: 10, fontSize: '15px', borderBottom: '1px solid #ccc' }}>Top Performing Post</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap',  }}>
                        {page}
                    </View>
                </View>
            </Page>
        ))}
    </Document>

);

export default MyPDF;

const CardComponent = ({ title, description }) => (
    <View style={styles.card}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                <Image src={ImageMy} style={{ height: '20px', width: '20px' }} />
                <View style={{marginLeft:'10px'}}>
                    <Text style={{ fontSize: '10px', borderBottom: '1px solid #ccc' }}>Luxury Cars</Text>
                    <Text style={{ fontSize: '7px', paddingTop: '1px' }}>Luxury Cars</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft:'70px' }}>
                <View style={{padding: 0, margin:0}}>
                    <Image src={ImageMy} style={{ height: '10px', width: '10px' }} />
                </View>
            </View>
        </View>
        <View>
        <Image src={ImageMy} style={{height: '200px', width: '200px' }} />
        </View>
    </View>
);
