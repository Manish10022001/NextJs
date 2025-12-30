// with one [] only folders inside witll be visible is typed : localhost:3000/docs it will give error
//to resolve that we give two squarebrackets to slug so that when /docs is there it return home page of doc
export default async function Docs(
    {params} : {params: Promise<{slug?: string[]}>}
){
    const {slug} = await params;
    if(slug?.length === 2){
        return <h2>Viewing docs for features {slug[0]} and concepts {slug[1]}</h2>
    } else if(slug?.length===1){
        return <h2>Viewing docs for features {slug[0]}</h2>
    }
    return <h2>Docs Home Page</h2>
}