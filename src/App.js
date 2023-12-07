import logo from './logo.svg';
import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import MyPDF from './MyPDF';

function App() {

  const cards = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 2', description: 'Description 2' },
    // ... Add more cards
  ];
  

  return (
    <div>
    <PDFViewer width="100%" height="600">
      <MyPDF cards={cards} />
    </PDFViewer>
  </div>
  )
}

export default App;
