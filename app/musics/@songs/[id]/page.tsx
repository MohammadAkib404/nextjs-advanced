export default async function Song({params}: {params: {id: string}}) {

const {id} = await params;

  return (
    <div className="text-white">Songs: {id}</div>
  )
}