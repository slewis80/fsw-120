
// state is common term for global object used in your program
let state = {
   TODOS: [],
   otherVariable: ""
};

// Base url link:
const BASE_URL = 'https://some-domain.com/api/';

// ---- Event handlers ----

// Checkbox to update:
checkboxEl.addEventListener('click', function (e) {
 
    // code ... 

     updateToDo(data);

});

// Button to delete:
deleteItem.addEventListener('click', function (e) {

      // code ...

      deleteToDo(data);

});

// Update function:
const updateToDo = async (data) => {
  
    try {
     
    
    } catch (error) {
      console.error('>>>>>updateTodDo', error);
    }
  
}

// Delete function:
const deleteToDo = async () => {
  
    try {
     
    
    } catch (error) {
      console.error('>>>>>deleteToDo',error);
    }
  
}

// Example of a get request (using fetch, not axios)
const fetchData = async () => {

    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const results  = await response.json();

        state.TODOS = results.data.posts;
        console.log('>>>Fetch Initial Posts', results);

    } catch (error) {
        console.error('>>>fetchData',error);
    }
}

// bootstrap your app (loading initial functions for your app):

const bootstrap = async () => {
    
    try {
  
            await fetchData();
              renderToDos(state.TODOS);
              doSomethingElse();
              
      }
        catch (err) {
            console.log(err);
      }
  };



bootstrap();