import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const Description = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="descriptions custom_spaces">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>
          Ut ea nostrum numquam officiis quas commodi dolores nobis eaque veniam
          quos impedit sit,
        </p>
        <p>
          eligendi architecto cum vitae minima suscipit cupiditate iure ratione
          asperiores rerum atque aperiam deserunt est.
        </p>
      </div>

      <Collapse in={isOpen}>
        <div id="user_text" className="descriptions">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            quis sed quod deleniti delectus eos id totam veritatis repellat
            tempora consequatur possimus distinctio repudiandae vero molestiae,
            doloremque minus! Dicta odit optio placeat quos eligendi officia
            vitae quas ex dignissimos sunt commodi soluta doloribus, velit,
            illum obcaecati labore id sed eveniet hic. Inventore minus, fugiat
            aspernatur vero facilis animi placeat laborum iure quos temporibus
            nisi adipisci modi, error dicta omnis laboriosam? Consequatur
            aliquid neque amet aut qui repudiandae, aspernatur incidunt
            consectetur dolor atque voluptatum fugit fugiat numquam quo! At
            tempora repudiandae recusandae tenetur vero! Aut, repellendus beatae
            adipisci placeat quia dicta blanditiis reprehenderit odit nihil qui
            explicabo labore eligendi dolore, ut, porro incidunt numquam totam
            eos iste quam natus necessitatibus rem recusandae. Dolorum sunt
            dolores iure ducimus harum veritatis cupiditate ratione explicabo
            architecto voluptates, illo quae adipisci similique esse eligendi,
            inventore, a delectus veniam. Placeat quaerat corrupti sint
            voluptatum eveniet officia, suscipit quos deleniti ad hic eum illum.
            Alias, rem? Consectetur perferendis harum deleniti rem nostrum optio
            eius ut, cum doloribus. Recusandae inventore quaerat natus nisi sunt
            repudiandae libero, aperiam officiis est voluptas laborum
            dignissimos esse qui debitis assumenda incidunt consequatur iste eos
            neque. Itaque eveniet vel ut voluptates aspernatur asperiores
            quaerat non quo ipsa neque excepturi natus quos voluptas, id amet,
            nobis magni debitis, eius quae ratione et laudantium suscipit
            accusantium temporibus. Quaerat aperiam quod deserunt fugit facilis.
            Repellendus cum, corrupti, soluta neque nemo quaerat odit tempora
            dolorum quam eum dolorem similique. Quos error animi dolores totam,
            debitis veritatis, suscipit quod nobis reprehenderit unde placeat
            sed perferendis accusantium beatae cumque illo, aliquid quae illum.
            Porro itaque nulla ea animi architecto quo voluptatibus deleniti
            distinctio rem maiores, molestiae non sequi amet tempora consectetur
            quam nisi magni. Maxime accusantium culpa fugiat doloribus enim
            neque pariatur. Praesentium similique at repudiandae officia eum
            repellendus tempore, sint recusandae aliquam temporibus debitis
            fugiat commodi eligendi tenetur expedita quibusdam odio aliquid in
            esse natus eos iure pariatur.
          </p>
        </div>
      </Collapse>
      <div className="show_more_button_wrapper">
        <button onClick={() => setIsOpen(!isOpen)}>Show more</button>
      </div>
    </div>
  );
};

export default Description;
