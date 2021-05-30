let singletonInstance = null

function getSingleton () {
    if (!singletonInstance){
        singletonInstance= new DB() // Creating an instance of DB class and storing it in the global variable dbInstance
    }
    return singletonInstance
}

function useSingleton () {
    let singletonObj= getSingleton()
  
}
