export function Input({
    reference,
    PlaceHolder,
  }: {
    reference?:any;
    PlaceHolder: string;
  }) {
    const inputType=  PlaceHolder.toLowerCase()=="password"?"password":"text"      
    return (
      <div>
        <input
          className="px-4 py-3 border rounded m-2 "
          ref={reference}
          placeholder={PlaceHolder}
          type={inputType}
       
          />
      </div>
    );
  }
  