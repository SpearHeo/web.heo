const quotes = [
{
    quote: "진실은 반드시 따르는 자가 있고, 정의는 반드시 이루는 날이 있다.",
    author: "-도산 안창호-",
},
{
    quote: "당신에게 주어진 시간은 한정되어 있다. 그러므로 타인의 인생을 살면서 허비할 수는 없다.",
    author: "-스티브 잡스-",
},
{
    quote: "작은 목표를 품으면 작은 것을 성취하고, 큰 목표를 품으면 커다란 성공을 얻는다.",
    author: "-데이비드 조셉 슈워츠-",
},
{
    quote: "완수하는 것이 완벽한 것보다 낫다.",
    author: "-셰릴 샌드버그-",
},
{
    quote: "바르게, 아름답게, 정의롭게 사는 것은 결국 모두 똑같은 것이다. ",
    author: "-소크라테스-",
},
{
    quote: "인생의 비극이란 사람들이 삶을 사는 동안 내면에서 잃어가는 것들이다.",
    author: "-알버트 아인슈타인-",
},
{
    quote: "허물이 있다면, 버리기를 두려워말라",
    author: "-공자-",
},
{
    quote: "인내할 수 있는 사람은 그가 바라는 것은 무엇이든지 손에 넣을 수 있다.",
    author: "-벤자민 프랭클린-",
},
{
    quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄 수 없다.",
    author: "-캐롤 버넷-",
},
{
    quote: "오직 한 가지 성공이 있을 뿐이다. 바로 자기 자신만의 방식으로 삶을 살아갈 수 있느냐이다.",
    author: "-크리스토퍼 몰리-",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

 quote.innerText = todaysQuotes.quote;
 author.innerText = todaysQuotes.author;

