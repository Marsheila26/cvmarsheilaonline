function Rowskill(props:any) {
  return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12 md:col-span-4 ">{props.platform}</div>
            <div className="col-span-12 md:col-span-4 ">{props.skills}</div>
            <div className="col-span-12 md:col-span-4 ">{props.difficult}</div>
              </div>
            </div>
          </div>  
  );
}

export default function skill() {
  return (
      <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-2xl">Skills</h2>
      <Rowskill skills="Menguasai Microsoft Excel" platform="Excel" difficult="EXPERT"/>
      <Rowskill skills="Menguasai Microsoft Word" platform="Word" difficult="EXPERT"/>
      <Rowskill skills="Menguasai Visual FoxPro" platform="FoxPro" difficult="EXPERT"/>
    </div>
  );
}