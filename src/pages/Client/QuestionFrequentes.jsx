import { Search } from "lucide-react";
import React from "react";

const QuestionFrequentes = () => {
  return (
    <div>
      <div>
        <h1 className="text-[35px] leading-[30px] py-4 capitalize text-[#324DA9] font-montserrat font-normal">
          questions fréquemment posées
        </h1>
        <p className="text-[#696A6B] font-montserrat text-[16px] font-medium leading-[24px]">
          Réponses rapides à vos questions. Vous ne trouvez pas ce que vous
          cherchez ? Recherchez votre question ci-dessous.
        </p>
      </div>
      <div className="relative py-4">
        <input
          type="text"
          placeholder="Rechercher ici"
          className="w-full rounded border border-[#E6E7E9] h-auto px-4 pr-12 py-2 text-[16px] font-montserrat font-normal leading-6 text-[#38383A] placeholder-[#E6E7E9]"
        />
        <Search
          color="#38383A"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#38383A]"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 py-8 gap-8">
        <div className="h-[150px] ">
          <h1 className="text-[#324DA9] pb-5 font-montserrat text-[20px] font-semibold leading-[28px]">
            Numquam molestias pariatur quam nisi fugit vero voluptas ?
          </h1>
          <p className="text-[#565758] font-montserrat text-[16px] font-normal leading-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            molestias pariatur quam nisi fugit vero voluptas tempora itaque fuga
            aliquid, perferendis amet maxime id voluptatum quaerat sunt quod
            dolores quisquam.
          </p>
        </div>
        <div className="h-[150px] ">
          <h1 className="text-[#324DA9] pb-5 font-montserrat text-[20px] font-semibold leading-[28px]">
            Numquam molestias pariatur quam nisi fugit vero voluptas ?
          </h1>
          <p className="text-[#565758] font-montserrat text-[16px] font-normal leading-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            molestias pariatur quam nisi fugit vero voluptas tempora itaque fuga
            aliquid, perferendis amet maxime id voluptatum quaerat sunt quod
            dolores quisquam.
          </p>
        </div>
        <div className="h-[150px] ">
          <h1 className="text-[#324DA9] pb-5 font-montserrat text-[20px] font-semibold leading-[28px]">
            Quisquam doloribus eligendi expedita ullam rem?
          </h1>
          <p className="text-[#565758] font-montserrat text-[16px] font-normal leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptas
            ducimus repudiandae, eveniet libero sequi deserunt modi accusantium
            dolore aliquid iste, perspiciatis voluptatem!
          </p>
        </div>

        <div className="h-[150px] ">
          <h1 className="text-[#324DA9] pb-5 font-montserrat text-[20px] font-semibold leading-[28px]">
            Facere corrupti eum voluptate, perspiciatis reiciendis?
          </h1>
          <p className="text-[#565758] font-montserrat text-[16px] font-normal leading-[24px]">
            Temporibus doloremque animi laudantium odio dicta incidunt
            aspernatur, fugiat quo sunt at provident reprehenderit veniam,
            soluta pariatur facilis repellat officia expedita.
          </p>
        </div>

        <div className="h-[150px] ">
          <h1 className="text-[#324DA9] pb-5 font-montserrat text-[20px] font-semibold leading-[28px]">
            Adipisci culpa distinctio nesciunt sint natus?
          </h1>
          <p className="text-[#565758] font-montserrat text-[16px] font-normal leading-[24px]">
            Sequi ipsa consequuntur quam dolores perspiciatis assumenda! Fugiat
            harum tempore quas alias doloremque? Non temporibus, corrupti
            dolorem repellendus ipsam doloribus distinctio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionFrequentes;
