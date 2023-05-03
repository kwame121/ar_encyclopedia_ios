import { bookList } from "./books";
import { labels } from "./Label";
import { lessons } from "./lessons";
import { portalAssets } from "./portalAssets";
import { trackingAssets } from "./trackingAssets";



export const getBookById = (id) => {
    let book = bookList.filter((book)=>{
        return id == book?.id;
    })[0];
    return book;
}

export const getData = (id) => {
    //some code here
    let book = bookList.filter((book)=>{
        return id == book.id
    })[0];

    let lessonList = lessons.filter((lesson)=>{
        return id == lesson.bookId;
    });
    
    return ({book:book,lessons:lessonList});
}

export const getLesson = (id) => {
    let lesson = lessons.filter((lesson)=>{
        return id == lesson?.id;
    })[0];

    return lesson;
}

export const getBook = (string) => 
{
    let books = bookList.filter((book)=>{
        return book.title.toLowerCase().includes(string.toLowerCase()) || book.author.toLowerCase().includes(string.toLowerCase());
    });
    return books;
}

export const getModule = (string) => 
{
    let modules = lessons.filter((lesson)=>{
        return lesson.title.toLowerCase().includes(string.toLowerCase());
    });
    return modules;
}

export const returnDefault = (value) => 
{
    if (value == undefined || value == null)
    {
        return '';
    }
    return value;
}

export const getBooksByCategory = (category) => 
{
    let books = bookList.filter((book)=>{
        return book.category == category;
    });

    return books;

}

export const getModulesByCategory = (category) => 
{
    let lessonList = lessons.filter((lesson)=>{
        return lesson.category == category;
    });

    return lessonList;

}

export const getFeaturedLessons = () => {
    const shuffled = lessons.slice().sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 4);
    return selected;
}

export const getFeaturedPortals = () => {
    const shuffled = portalAssets.filter((portal)=>{
        return !portal?.isDeleted
    }).slice().sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 4);
    return selected;
}

export const getFeaturedBooks = () => {
    const shuffled = bookList.slice().sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 5);
    return selected;
}

export const getTrackers = (id) => 
{
    let trackers = trackingAssets.filter((tracker)=>{
        return tracker?.id == id;
    });
    return trackers;
}

export const getTrackersByBook = (id) => {
    let trackers = trackingAssets.filter((tracker)=>{
        return tracker?.bookId == id;
    });
    return trackers;
}

export const getTrackersByLesson = (id) => {
    let trackers = trackingAssets.filter((tracker)=>{
        return tracker?.lessonId == id;
    });
    return trackers;
}

export const getPortalData = (id)  =>{
    let portal = portalAssets.filter((portal)=>{
        return id == portal?.id;
    })[0];
    return portal;
}

export const getLabelsByTracker = (id) => {
    let labelArray = labels.filter((label)=>{
        return id == label?.trackerId;
    });
    return labelArray;
} 