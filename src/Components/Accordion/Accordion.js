import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'

export default function Accordion() {
    return (
        <div className='accordion'>
            <div className='container'>
                <SectionTitle
                title='میخوای بدونی ما اینجا چیکار میکنیم ؟'
                subTitle='پس بشین و دو دیقه تا آخر بخون تا ببینی با ما باشی به کجا ها میرسی'
                />
                <div class="accordion accordion-box" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                با دوره‌های سبزلرن برنامه‌نویس حرفه‌ای شوید!
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <p>
                                    اگر در ابتدای مسیر یادگیری برنامه‌نویسی قرار دارید یا بعد از چند سال فعالیت حرفه‌ای به‌عنوان برنامه‌نویس به‌دنبال فتح قله‌های جدید در این حوزه هستید، دوره‌های سبزلرن شما را به هدفتان می‌رسانند. در این آکادمی همه چیز برای یادگیری برنامه‌نویسی از صفر یا دریافت آموزش‌های تکمیلی برای تبدیل شدن به یک برنامه‌نویس کاربلد مهیا است. در سبزلرن دوره‌های آموزشی متنوع با کمترین هزینه و پشتیبانی مستمر آماده شده تا بدون نیاز به کتاب یا دوره دیگر، بتوانید صفر تا صد برنامه‌نویسی را یاد بگیرید. تجربه‌های دانشجویان قبلی نشان می‌دهد که سبک تدریس اساتید مجرب سبزلرن نه تنها آموزش‌های استاندارد را با پروژه‌های واقعی ترکیب می‌کند، بلکه به دانشجویان انگیزه و اعتمادبه‌نفس لازم برای ادامه مسیر برنامه‌نویسی را می‌دهد. سبزلرن با تمرکز بر آموزش‌های منطبق با نیازهای بازار کار ایران و استفاده از روش‌های تدریس بومی‌سازی‌شده، تضمین می‌کند که نه تنها مطالب به‌روز و حرفه‌ای را یاد بگیرید، بلکه با آمادگی کامل وارد بازار کار شوید.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                آموزش برنامه نویسی به سبکی منحصربه فرد
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>
                                    شمایی که وارد این صفحه شدید، احتمالا قبلا با چند مرکز آموزش دوره برنامه نویسی آشنا شده و احتمالا بعد از این هم به تحقیقتون ادامه میدید. اما حالا که مهمان سبزلرن شدید، بد نیست در جریان چکیده ای از تجربیات و ذهنیت سبزلرن در آموزش کدنویسی رو هم قرار بگیرید تا به تصمیم گیری نهایی شما کمک کنه. حس سردرگمی و تردید در انتخاب منبع آموزشی و گاهی مسیر یادگیری برنامه نویسی تقریبا بین همه علاقمندان این تخصص جذاب مشترک بوده چون تا دلتون بخواد شعار آموزش برنامه نویسی از صفر و آموزش برنامه نویسی رایگان و ... سراسر وب رو پر کرده اما وقتی شروع به آموزش دیدن می کنید، می بینید که یا مدرس مسلط نیست، یا مسیر آموزشی شفاف و استاندارد نیست و یا سبک و لحن تدریس و ارائه تمرینات طوری نیست که بتونید به راحتی باهاش ارتباط بگیرید و در کوتاه مدت به عمل برسونید. شاید براتون جالب باشه که بعضی از دانشجوهای سبزلرن گفتن که قبل از گذروندن دوره های آموزش برنامه نویسی سبزلرن، به واسطه دوره های غیر استاندارد گذشته تصمیم گرفته بودن کلا از دنیای برنامه نویسی خداحافظی کنن و احساس میکردن استعداد این رشته رو ندارن اما وقتی با سبک و استراتژی آموزشی سبزلرن در آموزش برنامه نویسی از صفر  آشنا شدن، اتفاقا علاقه و انگیزه شون برای ادامه این مسیر دوست داشتنی و پولساز بیشتر هم شد و اعتماد به نفس فوق‌العاده ای پیدا کردن. بنابراین چه اول راه یادگیری برنامه نویسی باشید و چه در حال توسعه مهارت های خودتون، منبع آموزشی به روز و حرفه ای مثل سبزلرن به تنهایی میتونه تمام انتظارات و نیازهای شمارو پوشش بده. خب هر ادعایی سند و مدرک هم میخواد پس بیاید یه دور دلایل این ادعا رو باهم بررسی کنیم
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                1. آموزش برنامه نویسی رایگان
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>
                                    سبزلرن اعتقاد داره ورود هر علاقه مندی به دنیای آموزش کدنویسی باید بدون ریسک باشه و هیچ دغدغه ای جز تمرکز روی یادگیری در ذهن اون فرد نباشه. به همین دلیل می بینید که در طرح آموزش برنامه نویسی رایگان سبزلرن، تمام زبان ها و تکنولوژی های اصلی مثل جاوا اسکریپت، پایتون، CSS ، HTML و چندین دوره دیگه به صورت رایگان و همراه با پشتیبانی مادام العمر آموزش داده میشه که همه اونها در دسته آموزش صفر تا صد برنامه نویسی هم هستن و برخلاف دیگران، به بهانه رایگان بودن چیزی از کیفیت و حجم محتوای دوره ها کم نشده!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
