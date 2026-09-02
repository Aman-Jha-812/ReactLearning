
import style from './Card.module.css'

const Card = () => {
  return (
    <>
      <div className="btn">Card</div>

      <p className={style.faltu}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        excepturi sapiente maiores, quidem recusandae magnam! Beatae similique
        ut veniam illo?
      </p>

      //inline style {}- javascript syntax, {}- for object
      <h1 style={
        {
          backgroundColor:'yellow'
        }
      }>Hello how are you?</h1>
    </>
  );
};

export default Card;
