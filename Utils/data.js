import gravity from '../assets/text/gravity.json';
import iupac from '../assets/text/iupac.json';
import livingbeings from '../assets/text/livingbeings.json';
import plantsAndAnimals from '../assets/text/plantsAndAnimals.json';
import yaaAsantewaa from '../assets/text/yaaAsantewaaWar.json';

import animalCell from '../assets/images/assetImages/animalCell.jpg';
import blackhole from '../assets/images/assetImages/blackhole.jpg';
import eukaryote from '../assets/images/assetImages/eukaryote.svg';
import plantCell from '../assets/images/assetImages/plantCell.jpg';
import prokaryote from '../assets/images/assetImages/prokaryote.png';
import asantewaa from '../assets/images/assetImages/yaaAsantewaa.jpg';

import animalCellCaption from '../assets/captions/animalCell.json';
import blackHoleCaption from '../assets/captions/blackhole.json';
import eukaryoteCaption from '../assets/captions/eukaryote.json';
import plantCellCaption from '../assets/captions/plantCell.json';
import prokaryoteCaption from '../assets/captions/prokaryote.json';
import yaaAsantewaaCaption from '../assets/captions/yaaAsantewaa.json';





export const bookList = [
{
    id:'1',
    title:'Biology 101',
    author: 'Micheal Clarke',
    category:'Biology',
    imgUrl:require('../assets/images/biologyBook.jpg'),
    description:'',
    category:'Biology'

},
{
    id:'2',
    title:'Chemistry Fundamentals',
    author: 'James Boris',
    category:'Chemistry',
    imgUrl:require('../assets/images/chemistryBook.jpg'),
    description:'',
    category:'Chemistry'
},
{
    id:'3',
    title:'Physics in Action!',
    author: 'Bernie Vladimir',
    category:'Physics',
    imgUrl:require('../assets/images/physicsBook.jpg'),
    description:'',
    category:'Physics'
},
{
    id:'4',
    title:'African History',
    author: 'James Chike',
    category:'History',
    imgUrl:require('../assets/images/historyBook.jpg'),
    description:'',
    category:'History'
},

]

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


export const lessons = [
{
    id:'1',
    bookId:'1',
    bookTitle:'Biology 101',
    title:'Living Beings',
    category:'Biology',
    imgUrl:require('../assets/images/life.jpg'),
    text:livingbeings.text,
    images:[imageItems?.prokaryote,imageItems?.eukaryote],
    videos:[],
    trackingImages:[],
    models:[],
    audio:[]
},
{
    id:'2',
    bookId:'4',
    bookTitle:'African History',
    category:'History',
    title:'Yaa Asantewa War',
    imgUrl:require('../assets/images/yaaAsantewaaBG.jpg'),
    text:yaaAsantewaa.text,
    images:[imageItems?.yaaAsantewaa],
    videos:[],
    trackingImages:[],
    models:[],
    audio:[]
},
{
    id:'3',
    bookId:'2',
    bookTitle:'Chemistry Fundamentals',
    category:'Chemistry',
    title:'IUPAC Classification',
    imgUrl:require('../assets/images/iupac.jpg'),
    text:iupac.text,
    images:[],
    videos:[],
    trackingImages:[],
    models:[],
    audio:[]
},
{
    id:'4',
    bookId:'1',
    bookTitle:'Biology 101',
    category:'Biology',
    title:'Plant and Animal Cells',
    imgUrl:require('../assets/images/cells.jpg'),
    text:plantsAndAnimals.text,
    images:[imageItems?.animalCell, imageItems?.plantCell,imageItems?.blackHole],
    videos:[],
    trackingImages:[],
    models:[],
    audio:[]
},
{
    id:'5',
    bookId:'3',
    bookTitle:'Physics in Action!',
    category:'Physics',
    title:'Gravity',
    imgUrl:require('../assets/images/gravity.jpg'),
    text:gravity.text,
    images:[imageItems?.blackHole],
    videos:[],
    trackingImages:[],
    models:[],
    audio:[]
},
]


export const portalAssets = [
{
    title:'The Grand Canyon',
    backgroundUrl:require('../assets/images/portalAssets/canyon/canyonSmall.jpg'),
    portalImgUrl:require('../assets/images/portalAssets/canyon/canyonBig.jpg'),
    description:'The Grand Canyon (Hopi: Öngtupqa,[2] Yavapai: Wi:kaʼi:la, Navajo: Bidááʼ Haʼaztʼiʼ Tsékooh,[3][4] Southern Paiute language: Paxa’uipi,[5] Spanish: Gran Cañón or Gran Cañón del Colorado ) is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of over a mile (6,093 feet or 1,857 meters).[6]: 902 '
},
{
    title:'Pyramids of Giza',
    backgroundUrl:require('../assets/images/portalAssets/pyramids/pyramidsSmall.jpg'),
    portalImgUrl:require('../assets/images/portalAssets/pyramids/pyramidsBig.jpg'),
    description:'The Great Pyramid of Giza[a] is the largest Egyptian pyramid and the tomb of Fourth Dynasty pharaoh Khufu. Built in the early 26th century BC during a period of around 27 years,[3] the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. As part of the Giza pyramid complex, it borders present-day Giza in Greater Cairo, Egypt.'
},
{
    title:'The Louvre Museum',
    backgroundUrl:require('../assets/images/portalAssets/louvre/louvreSmall.jpg'),
    portalImgUrl:require('../assets/images/portalAssets/louvre/louvreBig.jpg'),
    description:"The Louvre (English: /ˈluːv(rə)/ LOOV(-rə)),[4] or the Louvre Museum (French: Musée du Louvre [myze dy luvʁ] (listen)), is the world's most-visited museum, and a historic landmark in Paris, France. It is the home of some of the best-known works of art, including the Mona Lisa and the Venus de Milo. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward). At any given point in time, approximately 38,000 objects from prehistory to the 21st century are being exhibited over an area of 72,735 square meters (782,910 square feet)."
},

]


export const videos = [

]

export const models = [


    
]