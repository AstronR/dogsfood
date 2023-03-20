import Accordion from "../../components/accordion";

function FaqPage () {
    const dataFAQ = [
        {
            title: "Действительно ли корма лучше натурального питания?",
            content: "Часто спрашивают, чем лучше кормить собаку, натуралкой или кормом: мнение ветеринаров неоднозначно. С одной стороны, при натуральном питании вы четко знаете, чем кормите животное. С другой стороны, самостоятельно составить сбалансированный рацион очень сложно. А кормить собаку «со стола» – значит, только вредить ее здоровью. Хороший покупной корм освобождает хозяина от лишней готовки и поддерживает стабильное состояние питомца."
        }, 
        {
            title: "Действительно ли выбор корма зависит от породы?",
            content: "Крупные собаки быстрее взрослеют и стареют, а значит им нужен особый рацион. Обычно корма для крупных пород выполнены в форме больших крокетов. Их отличительная особенность - повышенное содержание белка и пониженное содержание жиров. Это необходимо, чтобы сохранить молодость всех систем организма, добавить питомцу энергии и снизить нагрузку на суставы. Для питомцев, которые ведут активный образ жизни или занимаются спортом, выпускают специальные классы классы кормов для собак с повышенным содержанием углеводов и полезных минералов. Такой продукт всегда помечен значком “Энерджи” или “Актив” на упаковке. Есть производители, которые выпускают сухой корм для собак премиум-класса для каждой породы отдельно. Для маленьких пород состав подразумевает меньше углеводов. Сами крокеты тоже должны быть меньше, иначе собака не сможет полноценно есть."
        }, 
        {
            title: "Можно ли кормить собаку только сухим кормом?",
            content: "Если вы кормите животное качественным кормом, который соответствует его потребностям, то в рацион необязательно добавлять другие продукты. Ради разнообразия балуйте питомца готовыми влажными кормами того же класса, что и сухие. Также можно давать качественные лакомства."
        }, 
        {
            title: "Можно ли смешивать «сушку» с «натуралкой»?",
            content: "Нет. К сожалению, многие неопытные хозяева считают, что можно кормить собаку сухим кормом и натуральной едой. Ветеринары категорически против такого подхода, так как при определенном типе кормления желудочно-кишечный тракт подстраивается под конкретный корм. При смешивании натуралки и сухого корма хуже усваиваются питательные вещества и минералы, происходит расстройство пищеварения."
        }, 
        {
            title: "Сколько еды давать животному?",
            content: "Вес собаки в кг: 1-5 кг, рекомендуемое кол-во корма в день (г/сутки): 80-100 г. Вес собаки в кг: 5-10 кг, рекомендуемое кол-во корма в день (г/сутки): 100-145 г. Вес собаки в кг: 10-15 кг, рекомендуемое кол-во корма в день (г/сутки): 150-210 г. Вес собаки в кг: 20-25 кг, рекомендуемое кол-во корма в день (г/сутки): 250-310 г. Вес собаки в кг: 30-35 кг, рекомендуемое кол-во корма в день (г/сутки): 345-380 г. Вес собаки в кг: 40-45 кг, рекомендуемое кол-во корма в день (г/сутки): 435-465 г. Вес собаки в кг: 50-55 кг, рекомендуемое кол-во корма в день (г/сутки): 510-550 г. Вес собаки в кг: 60-65 кг, рекомендуемое кол-во корма в день (г/сутки): 580-610 г."
        },
        {
            title: "Могут ли кошки и собаки питаться едой друг друга?",
            content: "Нет. К сожалению, многие неопытные хозяева считают, что можно кормить собаку сухим кормом и натуральной едой. Ветеринары категорически против такого подхода, так как при определенном типе кормления желудочно-кишечный тракт подстраивается под конкретный корм. При смешивании натуралки и сухого корма хуже усваиваются питательные вещества и минералы, происходит расстройство пищеварения.Зачастую владельцы (даже с большим опытом) не все знают о различиях в физиологии собак и кошек. При кажущемся сходстве, у этих животных весьма разные диетические потребности. Давайте разберемся подробнее. Нас часто спрашивают: «Почему я не могу давать собаке и кошке одну и ту же еду?» или «Кажется, моей собаке больше нравится кошачья еда. Можно ли использовать ее на постоянной основе?». Если коротко, то нет. Когда собака немного поест из миски кота, с ней, скорее всего, все будет в порядке (при отсутствии индивидуальных аллергических реакций). Однако, если это войдет в привычку, и собака будет есть корм для кошек в качестве основного источника питательных веществ, то в долгосрочной перспективе вполне возможны неприятные последствия. Обратное утверждение в отношении кошек тоже верно."
        },
        {
            title: "Собака плохо ест или отказывается от еды?",
            content: "Такое бывает, что собака отказывается есть сухой корм. Это может происходить по разным причинам: при смене одного корма на другой, при переводе с натуралки на сушку или просто отказываются без видимых причин. В этой статье мы расскажем о том, как выяснить причины отказа от сухого корма, а также какие действия стоит предпринять. В первую очередь стоит узнать причину, почему собака не ест сухой корм. Если этого не сделать, составить план дальнейших действий не получится. Имейте в виду, что кратковременные отказы от еды - это абсолютно нормально для собаки и не должно являться поводом для беспокойства. Возможно у питомца просто «разгрузочный день», плохой аппетит у собаки непродолжительное время не страшен, при условии его активности и жизнерадостности."
        }, 
        {
            title: "Каким должен быть состав корма?",
            content: "Независимо от породы вашего питомца, при выборе, какой сухой корм лучше для собак, нужно изучить его состав. Первым в составе всегда указывают продукт, которого там больше всего. Это должно быть мясо: индейка, курица, говядина. Для собак-аллергиков подойдет лосось, кролик или ягненок. Будьте внимательны, если на упаковке написано “мясо домашней птицы и субпродукты”. Субпродукты, к которым относятся желудки, почки, сердце и печень, очень полезны для собак. Но, если это и правда полезные компоненты, то производитель укажет, что именно добавили в корм. А вот надпись “мясо домашней птицы” обычно значит, что в составе также кости, шкура и даже перья. Далее должны быть указаны углеводы. Обычно это морковь и картофель, они лучше всего усваиваются организмом животного. Полезны для животного бурый рис, ячмень. А вот белый рис дешевле, в нем содержится меньше нужных организму животного веществ. Следующий пункт - жиры, растительные и животные. Часто состав сухого корма для собак содержит кукурузу, но это не лучший вариант. Она нередко вызывает аллергию. Допустимо небольшое количество сои. Сухой корм для собак супер-премиум класса также содержит другие виды овощей и фруктов и цельное яйцо (не яичный порошок, это важно). В составе могут быть экстракты трав, витамины Е и С. Не должно быть синтетических консервантов, которые вызывают различные заболевания, в том числе онкологические. Корм премиум-класса обычно не содержит таких компонентов, но на всякий случай проверьте наличие в составе значка EWG. Если такое сокращение есть, значит в составе синтетические добавки, но производитель пытается это скрыть. Хороший корм для собак содержит только натуральные консерванты."
        } 
    ] 

    return (
        <>  
                <h1>Часто спрашивают</h1>
                { dataFAQ.map(data => <Accordion title={data.title}>{data.content}</Accordion>)}
        </>    
    );
}

export default FaqPage;