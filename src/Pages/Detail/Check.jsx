import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckPro from "./CheckPro";

const Check = (props) => {
  const items = useSelector((state) => state.detail.items);
  // localStorage.setItem('items' , '1')
  // const [Flag, SetFlag] = useState(false)

  // useEffect(() => {
  //   SetFlag(true)
  // } ,[Flag])

  // useEffect(() => {
  //  const shoow = localStorage.getItem('items')
  //  if(shoow === '1'){
  //   // eslint-disable-next-line
  //   {items.map((item) => (
  //     <CheckPro
  //       key={item.id}
  //       id={item.id}
  //       heading1={item.heading1}
  //       price={item.price}
  //     />
  //   ))}
  //  }
  // }, [items])

  const param = useParams();
  // console.log(param)
  // const Dataa = items.find((obj) => obj.id === param.id);
  // console.log(Dataa);

  return (
    <>
      {/* {Flag && <div> */}
      {/* {items.map((item) => (
        <CheckPro
          key={item.id}
          id={item.id}
          heading1={item.heading1}
          price={item.price}
        />
      ))} */}
      {/* </div>} */}
         {items.map((item) => (
        <CheckPro
        key={item.id}
         item={item}
        />
      ))}
    </>
  );
};

export default Check;
