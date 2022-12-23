import React from 'react'

export const EventDetails = () => {
    return (
        <div className='w-full px-52 bg-eventdetails-pattern bg-no-repeat flex flex-col'>
            <img src="/eventdetails.png" alt="poster" className='mt-20' />
            <div className='flex flex-row gap-x-7'>
                <p className='text-gray-black text-[40px] font-bold mt-16'><span className='text-gray-black text-2xl'>Dec 15</span><br />
                    Развитие 2.0. Локальное
                    лидерство vs глобальная
                    умеренность</p>
                <div className='flex flex-col mt-20'>
                    <div className='flex flex-row justify-end gap-x-5'>
                        <img src="/heart.svg" />
                        <img src="/share.svg" />
                    </div>
                    <div className='flex flex-col border border-[#E4E4E4] rounded-xl px-9 py-4 gap-y-5 mt-10'>
                        <p className='text-center text-2xl font-bold text-gray-black'>Free</p>
                        <button className='w-[240px] '>Reserve a Spot</button>
                    </div>
                </div>
            </div>
            <p className='text-sm font-medium text-gray-black'>Поговорим про венчурный рынок, актуальные тренды и сообщества как драйверы роста бизнеса.</p>
            <h1 className='text-3xl font-bold mt-11 text-gray-black'>When and where</h1>
            <div className='flex flex-row mt-4'>
                <div className='flex flex-col'>
                    <div className='flex flex-row'><img src="/date.svg" />
                        <p className='text-gray-black text-xl font-medium'>Date and Time</p>
                    </div>
                    <p className='w-[300px] text-gray-black text-lg font-normal'>Thu, Dec 15, 2022, 6:30 PM Armenia
                        Standard Time Armenia Time</p>
                </div>
                <div className='flex flex-col pl-16 border-l-gray-black border-l'>
                    <div className='flex flex-row'><img src="/location.svg" />
                        <p className='text-gray-black text-xl font-medium'>Location</p>
                    </div>
                    <p className='w-[300px] text-gray-black text-lg font-normal'>FORMULA HUB 65/5 Halabyan
                        Street Yerevan, Yerevan 0078</p>
                </div>
            </div>
            <h1 className='text-gray-black text-3xl font-bold mt-11'>About this event</h1>
            <div className='flex flex-row mt-4'>
                <img src="/clock.svg" />
                <p className='text-gray-black text-sm font-medium'>2 hours 30 minutes</p>
                <img src="/ticketyellow.svg" className='ml-4' />
                <p className='text-gray-black text-sm font-medium'>Mobile eTicket</p>
            </div>
            <h1 className='text-gray-black text-3xl font-bold mt-11'>Главные темы</h1>
            <ul className='list-disc pl-10 mt-4'>
                <li className='text-gray-black text-lg font-normal'>Мартовские прогнозы развития инвестиционного рынка — подтвердились ли ожидания</li>
                <li className='text-gray-black text-lg font-normal'>Тенденции и прогнозы на 2023 год</li>
                <li className='text-gray-black text-lg font-normal'>Подводные камни вывода бизнеса на международные рынки. Кейсы</li>
                <li className='text-gray-black text-lg font-normal'>Монострановой фокус vs Мультистрановое развитие</li>
                <li className='text-gray-black text-lg font-normal'>Адаптация к новой бизнес-среде: роль сообществ в развитии бизнеса</li>
            </ul>
            <h1 className='text-gray-black text-3xl font-bold mt-11'>Для кого мы это делаем</h1>
            <ul className='pl-5 mt-4'>
                <li className='text-gray-black text-lg font-normal'>→ стартапы, инвесторы, представители инновационной экосистемы Армении</li>
                <li className='text-gray-black text-lg font-normal'>→ предприниматели и инвесторы, которые развивают глобальный бизнес, находясь в Армении</li>
            </ul>
            <p className='text-gray-black text-3xl font-medium mt-11'>Вы сможете присоединиться к дискуссии с участием предпринимателей
                и инвесторов — самых активных представителей бизнес-среды Армении,
                чтобы обсудить актуальные венчурные тренды и направления
                масштабирования бизнеса. Кроме того, встреча станет идеальным местом
                для нетворкинга и обмена опытом.</p>
            <h1 className='text-gray-black text-3xl font-bold mt-11'>Программа</h1>
            <ul className='list-disc pl-10 mt-4'>
                <li className='text-gray-black text-lg font-normal'>Вступительное слово от МТС. Инновации и сообщество</li>
                <li className='text-gray-black text-lg font-normal'>Campfire с представителями корпораций, инвестиционных фондов и стартапов, которые
                    обсудят горячие темы о венчурном рынке и трендах на 2023 год</li>
                <li className='text-gray-black text-lg font-normal'>Open talk с серийным предпринимателем Грачиком Аджамяном о построении бизнеса в разных странах</li>
                <li className='text-gray-black text-lg font-normal'>Networking time</li>
            </ul>
            <h1 className='text-gray-black text-3xl font-bold mt-11'>Спикеры</h1>
            <p className='text-gray-black text-lg font-normal mt-4'><b>Григор Ованнисян</b>, партнер Formula.vc, Руководитель сети бизнес-ангелов Армении BANA</p>
            <p className='text-gray-black text-lg font-normal'><b>Дмитрий Лю</b>, инвестиционный директор YellowRockets.vc</p>
            <p className='text-gray-black text-lg font-normal'><b>Грачик Аджамян</b>, основатель Wakie и B4</p>
            <p className='text-gray-black text-lg font-normal'><b>Карен Саргсян</b>, Начальник отдела планирования и развития ИТ Viva-MTS</p>
            <p className='text-gray-black text-lg font-normal'><b>Карен Варданян</b>, Партнер Formula.vc. Управляющий фондом Sprint Crowdfunders' Fund</p>
            <p className='text-gray-black text-lg font-normal'><b>Андрей Краснопеев</b>, руководитель по инновациям и партнерствам MTS</p>
            <h1 className='text-gray-black text-3xl font-bold mt-11'>Организаторы</h1>
            <p className='text-gray-black text-lg font-normal mt-4'><b>MTS Startup Hub</b> — центр по инновациям и инвестициям МТС. Основные направления работы
                — венчурные инвестиции, коммерческое сотрудничество и программа технологической
                инкубации. MTS StartUp Hub получил свыше 6,5 тысяч заявок. Из них порядка 120 ушли в
                работу по тестированию гипотез, а 20 перешли в масштабирование.</p>
            <p className='text-gray-black text-lg font-normal mt-4'><b>Инвестиционный фокус корпоративного венчурного фонда МТС</b> — FinTech, Entertainment,
                MarTech, Media, SmartHome, Wellness & Lifestyle. Фонд инвестирует в стартапы стадий round
                A+/B, имеющие стратегическую ценность для МТС.
                Сумма инвестиций составляет до $5. В портфеле фонда 8 компаний.</p>
            <p className='text-gray-black text-lg font-normal mt-4'><b>YellowRockets</b> — управляющая компания международными и российскими венчурными
                фондами. YellowRockets фокусируется на ранних стадиях развития стартапов, инвестируя на
                стадиях Pre-Seed, Seed и Round A до 2 миллионов долларов. Кроме того, YellowRockets
                специализируется на акселерационных программах в интересах ведущих корпораций,
                выступает организатором профильных мероприятий для венчурного сообщества,
                способствует развитию экосистемы технологического предпринимательства на региональном
                и глобальном уровне.</p>
            <div className='flex flex-row mt-11'>
                <h1 className='text-gray-black text-3xl font-bold pr-2'>Share with friends</h1>
                <img src="/share.svg" className='mt-1' />


            </div>
            <div className='flex flex-col mt-11'>
                <h1 className='text-gray-black text-3xl font-bold pr-2'>Other events you may like</h1>
                <div className='flex flex-row mt-11 gap-x-8'>
                    <div className='flex flex-col w-[300px] h-[300px]'>
                        <img src="/events3.png" className='w-full h-1/2' />
                        <div className='flex flex-col justify-between h-1/2'>
                            <h1 className='text-gray-black text-sm font-bold'>Good decisions in tough times</h1>
                            <p className='text-yellow text-sm font-semibold'>Sat, Dec 17, 2:30 PM</p>
                            <p className='text-gray-black text-sm font-normal'>DataArt • Yerevan, Yerevan</p>
                            <div className='flex flex-row justify-between'>
                                <p className='text-gray-black text-sm font-normal'>Free</p>
                                <div className='flex flex-row gap-x-5'>
                                    <img src="/heart.svg" className='h-[22px] w-[22px]'/>
                                    <img src="/share.svg" className='h-[22px] w-[22px]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[300px] h-[300px]'>
                        <img src="/events1.png" className='w-full h-1/2' />
                        <div className='flex flex-col justify-between h-1/2'>
                            <h1 className='text-gray-black text-sm font-bold'>Armenian C++ Community Meetup #7 @ ISTC</h1>
                            <p className='text-yellow text-sm font-semibold'>Sat, Dec 17, 4:00 PM</p>
                            <p className='text-gray-black text-sm font-normal'>ISTC Foundation, Conference Hall</p>
                            <div className='flex flex-row justify-between'>
                                <p className='text-gray-black text-sm font-normal'>Free</p>
                                <div className='flex flex-row gap-x-5'>
                                    <img src="/heart.svg" className='h-[22px] w-[22px]'/>
                                    <img src="/share.svg" className='h-[22px] w-[22px]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[300px] max-h-[300px]'>
                        <img src="/events2.png" className='w-full h-1/2' />
                        <div className='flex flex-col justify-between h-1/2'>
                            <h1 className='text-gray-black text-sm font-bold'>The Job Hunting Accelerator Bootcamp-Land Your Dream Job — Yerevan</h1>
                            <p className='text-yellow text-sm font-semibold'>Sat, Dec 17, 8:00 PM</p>
                            <p className='text-gray-black text-sm font-normal'>Online - Anywhere w/Fast Wifi and Sound, Yerevan</p>
                            <div className='flex flex-row justify-between'>
                                <p className='text-gray-black text-sm font-normal'>Free</p>
                                <div className='flex flex-row gap-x-5'>
                                    <img src="/heart.svg" className='h-[22px] w-[22px]'/>
                                    <img src="/share.svg" className='h-[22px] w-[22px]'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
