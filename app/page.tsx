import { Container, Filters, Title, TopBar } from "@/components/shared";

//
export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы:" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          
          {/* левая часть - фильтрация */}
          <div className="w-[250px] h-[250px] ">
            <Filters />
          </div>
          {/*  */}

          {/* правая часть - список товаров */}
          <div className="flex-1 bg-blue-400">
            <div className="flex flex-col gap-16">
              Список товаров
            </div>
          </div>
          {/*  */}

        </div>
      </Container>
    </>
  );
}
