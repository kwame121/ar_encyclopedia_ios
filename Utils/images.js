import animalCellCaption from '../assets/captions/animalCell.json';
import blackHoleCaption from '../assets/captions/blackhole.json';
import eukaryoteCaption from '../assets/captions/eukaryote.json';
import plantCellCaption from '../assets/captions/plantCell.json';
import prokaryoteCaption from '../assets/captions/prokaryote.json';
import yaaAsantewaaCaption from '../assets/captions/yaaAsantewaa.json';


export const imageItems = {
    "animalCell": {
         id:'1',
         caption:animalCellCaption.text,
         src:require('../assets/images/assetImages/animalCell.jpg'),
         title:'Animal Cell',
         bookId:'1',
         lessonId:'4'
     },
   "plantCell":  {
         id:'2',
         caption:plantCellCaption.text,
         src:require('../assets/images/assetImages/plantCell.jpg'),
         title:'Plant Cell',
         bookId:'1',
         lessonId:'4'
     },
   "blackHole":  {
         id:'3',
         caption:blackHoleCaption.text,
         src:require('../assets/images/assetImages/blackhole.jpg'),
         title:'Black Hole',
         bookId:'3',
         lessonId:'5'
     },
    "yaaAsantewaa": {
         id:'4',
         caption:yaaAsantewaaCaption.text,
         src:require('../assets/images/assetImages/yaaAsantewaa.jpg'),
         title:'Yaa Asantewaa',
         bookId:'4',
         lessonId:'2'
     },
    "eukaryote": {
         id:'5',
         caption:eukaryoteCaption.text,
         src:require('../assets/images/assetImages/eukaryote.svg'),
         title:'Eukaryote',
         bookId:'1',
         lessonId:'4'
     },
   "prokaryote":  {
         id:'6',
         caption:prokaryoteCaption.text,
         src:require('../assets/images/assetImages/prokaryote.png'),
         title:'Prokaryote',
         bookId:'1',
         lessonId:'4'
     },
 
 }