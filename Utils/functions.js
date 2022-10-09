import { bookList } from "./data"
import { lessons } from "./data"

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
    const shuffled = lessons.sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 3);
    return selected;
}