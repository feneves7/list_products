export default function containsProduct ({ title }, query) {


     if ( 
        title.toLowerCase().includes(query.toLowerCase().trim()) ||
        title.toUpperCase().includes(query.toUpperCase().trim()) ||
        title.match('[A-Za-zÀ-ú 0-9].*').includes(query)
        ){    
        return true;
    }
    return false; 
};
