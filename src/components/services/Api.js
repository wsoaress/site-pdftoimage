export async function getAllUsers() {
    try{
        const response = await fetch('10.78.0.129:3000/arquivo.zip');
        return await response.json();
    }catch(error) {
        return [];
    }
}
export async function createUser(data) {
    const response = await fetch(`http://10.78.0.129:3000/teste`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    .then((res) => console.log(res))
      .catch((err) => console.log(err));
    return await response.json();
}
//how to get a post in react?