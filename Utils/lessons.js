import gravity from '../assets/text/gravity.json';
import iupac from '../assets/text/iupac.json';
import livingbeings from '../assets/text/livingbeings.json';
import plantsAndAnimals from '../assets/text/plantsAndAnimals.json';
import yaaAsantewaa from '../assets/text/yaaAsantewaaWar.json';
import kidney from '../assets/text/kidney.json';
import liver from '../assets/text/liver.json';
import skin from '../assets/text/skin.json';
import digestiveSystem from '../assets/text/digestiveSystem.json';
import airways from '../assets/text/airways.json';
import mercury from '../assets/text/mercury.json';
import venus from '../assets/text/venus.json';
import mars from '../assets/text/mars.json';
import jupiter from '../assets/text/jupiter.json';
import saturn from '../assets/text/saturn.json';
import earth from '../assets/text/earth.json';
import brain from '../assets/text/brain.json';
import heart from '../assets/text/heart.json';
import acropolis from '../assets/text/acropolis.json';
import feudalJapan from '../assets/text/feudalJapan.json';
import flyer from '../assets/text/flyer.json';
import iss from '../assets/text/iss.json';
import pharoah from '../assets/text/pharoah.json';
import spaceShuttle from '../assets/text/spaceShuttle.json';
import pantheon from '../assets/text/pantheon.json';
import apollo11 from '../assets/text/commandModule.json';
import yoruba from '../assets/text/yoruba.json';
import carbon from '../assets/text/carbon.json';
import hydrogen from '../assets/text/hydrogen.json';
import helium from '../assets/text/helium.json';
import lithium from '../assets/text/lithium.json';
import himalayas from '../assets/text/himalayas.json';
import coral from '../assets/text/coral.json';
import canyon from '../assets/text/canyon.json';
import neptune from '../assets/text/neptune.json';
import uranus from '../assets/text/uranus.json';
import bosomtwe from '../assets/text/bosomtwe.json';
import ashanti from '../assets/text/ashanti.json';
import glaciers from '../assets/text/glaciers.json';
import islands from '../assets/text/islands.json';
import hurricane from '../assets/text/storm.json';
import rainforest from '../assets/text/rainforest.json';
import v8 from '../assets/text/v8.json';
import combustion from '../assets/text/combustion.json';
import turbofan from '../assets/text/turbofan.json';
import nuclear from '../assets/text/nuclear.json';
import heat from '../assets/text/heat.json';

import { imageItems } from './images';

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
    // {
    //     id:'2',
    //     bookId:'4',
    //     bookTitle:'African History',
    //     category:'History',
    //     title:'Yaa Asantewa War',
    //     imgUrl:require('../assets/images/yaaAsantewaaBG.jpg'),
    //     text:yaaAsantewaa.text,
    //     images:[imageItems?.yaaAsantewaa],
    //     videos:[],
    //     trackingImages:[],
    //     models:[],
    //     audio:[]
    // },
    // {
    //     id:'3',
    //     bookId:'2',
    //     bookTitle:'Chemistry Fundamentals',
    //     category:'Chemistry',
    //     title:'IUPAC Classification',
    //     imgUrl:require('../assets/images/iupac.jpg'),
    //     text:iupac.text,
    //     images:[],
    //     videos:[],
    //     trackingImages:[],
    //     models:[],
    //     audio:[]
    // },
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

    {
        id:'6',
        bookId:'5',
        bookTitle:'Human Anatomy',
        category:'Biology',
        title:'The Kidneys',
        imgUrl:require('../assets/images/assetImages/kidney.jpeg'),
        text:kidney.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },

    {
        id:'7',
        bookId:'5',
        bookTitle:'Human Anatomy',
        category:'Biology',
        title:'The Liver',
        imgUrl:require('../assets/images/assetImages/liver.png'),
        text:liver.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },

    {
        id:'8',
        bookId:'5',
        bookTitle:'Human Anatomy',
        category:'Biology',
        title:'The Skin',
        imgUrl:require('../assets/images/assetImages/skin.png'),
        text:skin.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },

    {
        id:'9',
        bookId:'5',
        bookTitle:'Human Anatomy',
        category:'Biology',
        title:'The Digestive System',
        imgUrl:require('../assets/images/assetImages/git.png'),
        text:digestiveSystem.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },

    {
        id:'10',
        bookId:'5',
        bookTitle:'Human Anatomy',
        category:'Biology',
        title:'The Airways',
        imgUrl:require('../assets/images/assetImages/lungs.png'),
        text:airways.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'11',
        bookId:'6',
        bookTitle:'Cosmos: A Study of the universe',
        category:'Physics',
        title:'Mercury',
        imgUrl:require('../assets/images/assetImages/mercury.jpg'),
        text:mercury.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'12',
        bookId:'6',
        bookTitle:'Cosmos: A Study of the universe',
        category:'Physics',
        title:'Venus',
        imgUrl:require('../assets/images/assetImages/venus.png'),
        text:venus.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'13',
        bookId:'6',
        bookTitle:'Cosmos: A Study of the universe',
        category:'Physics',
        title:'Mars',
        imgUrl:require('../assets/images/assetImages/mars.png'),
        text:mars.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'14',
        bookId:'6',
        bookTitle:'Cosmos: A Study of the universe',
        category:'Physics',
        title:'Jupiter',
        imgUrl:require('../assets/images/assetImages/jupiter.jpg'),
        text:jupiter.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'15',
        bookId:'6',
        bookTitle:'Cosmos: A Study of the universe',
        category:'Physics',
        title:'Saturn',
        imgUrl:require('../assets/images/assetImages/saturn.jpg'),
        text:saturn.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'16',
        bookId:'6',
        bookTitle:'Cosmos: A Study of the universe',
        category:'Physics',
        title:'Earth',
        imgUrl:require('../assets/images/earth.jpeg'),
        text:earth.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'17',
        bookId:'1',
        bookTitle:'Biology 101',
        category:'Biology',
        title:'The Heart',
        imgUrl:require('../assets/images/heartThumbnail.jpeg'),
        text:heart.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'18',
        bookId:'1',
        bookTitle:'Biology 101',
        category:'Biology',
        title:'The Brain',
        imgUrl:require('../assets/images/brainThumbnail.jpeg'),
        text:brain.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'19',
        bookId:'7',
        bookTitle:'Engineering Marvels',
        category:'Engineering',
        title:'International Space Station',
        imgUrl:require('../assets/images/station.jpeg'),
        text:iss.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'20',
        bookId:'7',
        bookTitle:'Engineering Marvels',
        category:'Engineering',
        title:'The Space Shuttle',
        imgUrl:require('../assets/images/spaceShuttle.jpeg'),
        text:spaceShuttle.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'21',
        bookId:'7',
        bookTitle:'Engineering Marvels',
        category:'Engineering',
        title:'The Wright Flyer',
        imgUrl:require('../assets/images/wright.jpeg'),
        text:flyer.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'22',
        bookId:'8',
        bookTitle:'The Ancient World',
        category:'History',
        title:'The Pantheon',
        imgUrl:require('../assets/images/pantheon.jpeg'),
        text:pantheon.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'23',
        bookId:'8',
        bookTitle:'The Ancient World',
        category:'History',
        title:'The Pharoah',
        imgUrl:require('../assets/images/pharoah.jpeg'),
        text:pharoah.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    }
    , {
        id:'24',
        bookId:'8',
        bookTitle:'The Ancient World',
        category:'History',
        title:'The Acropolis',
        imgUrl:require('../assets/images/acropolis.jpeg'),
        text:acropolis.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },

    {
        id:'25',
        bookId:'8',
        bookTitle:'The Ancient World',
        category:'History',
        title:'Feudal Japan',
        imgUrl:require('../assets/images/himejiCastle.jpeg'),
        text:feudalJapan.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    }
,
    {
        id:'26',
        bookId:'7',
        bookTitle:'Engineering Marvels',
        category:'Engineering',
        title:'Apollo 11',
        imgUrl:require('../assets/images/commandModule.jpeg'),
        text:apollo11.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'27',
        bookId:'4',
        bookTitle:'African History',
        category:'History',
        title:'The Yoruba',
        imgUrl:require('../assets/images/yoruba.jpeg'),
        text:yoruba.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'28',
        bookId:'9',
        bookTitle:'Earth Science',
        category:'Geography',
        title:'The Himalayas',
        imgUrl:require('../assets/images/himalayas2.webp'),
        text:himalayas.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'29',
        bookId:'10',
        bookTitle:'Our Oceans',
        category:'Geography',
        title:'Coral',
        imgUrl:require('../assets/images/coral1.jpeg'),
        text:coral.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'30',
        bookId:'2',
        bookTitle:'Chemistry Fundamentals',
        category:'Chemistry',
        title:'Carbon',
        imgUrl:require('../assets/images/carbon.jpeg'),
        text:carbon.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'31',
        bookId:'2',
        bookTitle:'Chemistry Fundamentals',
        category:'Chemistry',
        title:'Hydrogen',
        imgUrl:require('../assets/images/hydrogen.jpeg'),
        text:hydrogen.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'32',
        bookId:'2',
        bookTitle:'Chemistry Fundamentals',
        category:'Chemistry',
        title:'Helium',
        imgUrl:require('../assets/images/Helium.jpg'),
        text:helium.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'33',
        bookId:'2',
        bookTitle:'Chemistry Fundamentals',
        category:'Chemistry',
        title:'Lithium',
        imgUrl:require('../assets/images/lithium.png'),
        text:lithium.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'34',
        bookId:'9',
        bookTitle:'Earth Science',
        category:'Geography',
        title:'The Grand Canyon',
        imgUrl:require('../assets/images/canyon.jpeg'),
        text:canyon.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'35',
        bookId:'6',
        bookTitle:'Cosmos: A Study of the universe',
        category:'Physics',
        title:'Neptune',
        imgUrl:require('../assets/images/neptune.jpeg'),
        text:neptune.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'36',
        bookId:'6',
        bookTitle:'Cosmos: A Study of the universe',
        category:'Physics',
        title:'Uranus',
        imgUrl:require('../assets/images/uranus.jpeg'),
        text:uranus.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'37',
        bookId:'9',
        bookTitle:'Earth Science',
        category:'Geography',
        title:'Lake Bosomtwe',
        imgUrl:require('../assets/images/bosomtwe.jpeg'),
        text:bosomtwe.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'38',
        bookId:'4',
        bookTitle:'African History',
        category:'History',
        title:'The Ashanti',
        imgUrl:require('../assets/images/ashanti.jpeg'),
        text:ashanti.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'39',
        bookId:'9',
        bookTitle:'Earth Science',
        category:'Geography',
        title:'Glaciers',
        imgUrl:require('../assets/images/glaciers.jpeg'),
        text:glaciers.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'40',
        bookId:'9',
        bookTitle:'Earth Science',
        category:'Geography',
        title:'Islands',
        imgUrl:require('../assets/images/islands.webp'),
        text:islands.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'41',
        bookId:'10',
        bookTitle:'Our Oceans',
        category:'Geography',
        title:'Tropical Cyclones',
        imgUrl:require('../assets/images/storm.jpeg'),
        text:hurricane.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'42',
        bookId:'11',
        bookTitle:'Natural Spaces',
        category:'Geography',
        title:'Tropical Rainforests',
        imgUrl:require('../assets/images/amazonRainforest.jpeg'),
        text:rainforest.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'43',
        bookId:'12',
        bookTitle:'Mechanical Engineering',
        category:'Engineering',
        title:'V8 Engine',
        imgUrl:require('../assets/images/v8.webp'),
        text:v8.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'44',
        bookId:'12',
        bookTitle:'Mechanical Engineering',
        category:'Engineering',
        title:'Combustion Engine',
        imgUrl:require('../assets/images/internalCombustion.jpeg'),
        text:combustion.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'45',
        bookId:'12',
        bookTitle:'Mechanical Engineering',
        category:'Engineering',
        title:'Turbofan Engine',
        imgUrl:require('../assets/images/turbofan.jpeg'),
        text:turbofan.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'46',
        bookId:'3',
        bookTitle:'Physics in Action!',
        category:'Physics',
        title:'Nuclear Energy',
        imgUrl:require('../assets/images/reactor.jpeg'),
        text:nuclear.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    {
        id:'47',
        bookId:'3',
        bookTitle:'Physics in Action!',
        category:'Physics',
        title:'Heat',
        imgUrl:require('../assets/images/heat.png'),
        text:heat.text,
        images:[],
        videos:[],
        trackingImages:[],
        models:[],
        audio:[]
    },
    // {
    //     id:'16',
    //     bookId:'6',
    //     bookTitle:'Cosmos: A Study of the universe',
    //     category:'Physics',
    //     title:'Mercury',
    //     imgUrl:require('../assets/images/assetImages/lungs.png'),
    //     text:airways.text,
    //     images:[],
    //     videos:[],
    //     trackingImages:[],
    //     models:[],
    //     audio:[]
    // },
    ]