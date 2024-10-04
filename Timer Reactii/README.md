
<div class="css-16w8tga"><div class="chakra-stack css-1rbt0ix"><a target="_blank" rel="noopener" class="chakra-link css-spn4bz" href="/problemset/assignments/4367/problems/251308/print"><svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-1a1hzdl" stroke-width="0"><path d="M19 8C20.66 8 22 9.34 22 11V17H18V21H6V17H2V11C2 9.34 3.34 8 5 8H6V3H18V8H19M8 5V8H16V5H8M16 19V15H8V19H16M18 15H20V11C20 10.45 19.55 10 19 10H5C4.45 10 4 10.45 4 11V15H6V13H18V15M19 11.5C19 12.05 18.55 12.5 18 12.5C17.45 12.5 17 12.05 17 11.5C17 10.95 17.45 10.5 18 10.5C18.55 10.5 19 10.95 19 11.5Z"></path></svg></a></div><div class="shelakhte css-0"><div class="css-lpvz3r"><div class="css-0" style="visibility: visible;"><p>سال ۲۱۳۷ است و شما به عنوان مهندس تکنولوژی در تیم نجات سیاره‌ای آرکا کار می‌کنید. کالیبراسیون دستگاه‌های نجات طبق برنامه پیش می‌رفت و قرار بود سیستم‌های نجات به طور خودکار در زمان مقرر فعال شوند و سیاره آرکا نجات پیدا کند. ناگهان صدای هشدار اضطراری از مرکز کنترل به گوش می‌رسد:</p>
<p><em><strong>«توجه، توجه! تیم نجات، یک مشکل بزرگ پیش آمده است! سیستم نجات خودکار دچار اختلال شده و غیرفعال است! شما فقط ۱۵ دقیقه تا برخورد سیارکی عظیم با سیاره آرکا فرصت دارید. اکنون همه چیز به شما و تایمرهای دستی بستگی دارد. شما باید به صورت دستی کالیبراسیون دستگاه‌های نجات را آغاز و متوقف کنید تا قبل از برخورد سیارک، سیستم‌ها آماده به کار شوند!»</strong></em></p>
<p>شما باید فوراً یک تایمر بسازید که بتواند عملیات نجات را به صورت دستی کنترل کند. فراموش نکنید که هر میلی‌ثانیه برای نجات سیاره حیاتی است.</p>
<p>ظاهر کلی برنامه به شکل زیر است:</p>
<p><img src="https://quera.org/qbox/view/sKQOjKJJFZ/E.gif" alt="توضیح تصویر"></p>
<h1>پروژه اولیه</h1>
<p>پروژه اولیه را از
<a href="/contest/assignments/4367/download_problem_initial_project/251308/">این لینک</a>
دانلود کنید.</p>
<details class="yellow">
<summary dir="auto">
<p><strong>راه‌اندازی</strong></p>
</summary>
<p>فایل دانلود شده را از حالت فشرده خارج  و دستور <code dir="auto">npm install</code> را در <code dir="auto">root</code> پروژه اجرا کنید.</p>
<p><em>همچنین برای هاست پروژه به صورت لوکال، می‌توانید از دستور</em> <code dir="auto">npm run dev</code> <em>استفاده کنید.</em></p>
</details>
<h1>جزئیات</h1>
<p>توضیحات کامپوننت زمان‌سنج *(Timer)*به شکل زیر است:</p>
<details class="blue">
<summary dir="auto">
<p><strong>ویژگی‌های مورد نیاز</strong></p>
</summary>
<table dir="auto">
<thead>
<tr>
<th align="center">ویژگی</th>
<th align="center">تعریف</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">نشان دادن زمان</td>
<td align="center">این کامپوننت داری یک المان <code dir="auto">&lt;h1&gt;</code> است که باید  به صورت زنده و دقیق زمان را به شکل <code dir="auto">00:00:00</code> <em>(صدم‌ثانیه:ثانیه:دقیقه)</em> نشان دهد.</td>
</tr>
<tr>
<td align="center">کنترل شروع و توقف</td>
<td align="center">در زیر تایمر باید یک دکمه وجود داشته باشد که امکان شروع و متوقف کردن تایمر را فراهم کند. وقتی تایمر متوقف است، دکمه باید <code dir="auto">Start</code> را نشان دهد و وقتی فعال است، باید به <code dir="auto">Stop</code> تغییر کند.</td>
</tr>
<tr>
<td align="center">Reset</td>
<td align="center">در لحظات حساس، باید بتوانید تایمر را به سرعت به حالت اولیه بازگردانید تا دوباره کالیبراسیون را آغاز کنید. دکمه <code dir="auto">Reset</code> باید زمان را به <code dir="auto">00:00:00</code> برگرداند.</td>
</tr>
<tr>
<td align="center">امکان حذف زمان‌ها</td>
<td align="center">پس از ثبت زمان ها درصورت وجود زمان دکمه <em>delete logs</em> اضافه شود و در زیر آن زمان‌ها نمایش داده شوند و با زدن دکمه <em>delete logs</em> همه زمان‌ها پاک شوند</td>
</tr>
<tr>
<td align="center">تشخیص هوشمند ورود و خروج</td>
<td align="center">با ورود کاربر به صفحه تایمر به‌صورت خودکار شروع به‌کار کند و با خروج از صفحه تایمر متوقف شود و این فرآیند همیشه برقرار باشد.</td>
</tr>
<tr>
<td align="center">امکان اضافه کردن‌ زمان‌</td>
<td align="center">با زدن دکمه <em>log time</em> زمان مربوطه اضافه شود</td>
</tr>
</tbody>
</table>
</details>
<details class="violet" open="">
<summary dir="auto">
<p><strong>راهنمایی</strong></p>
</summary>
<p>شما برای حل این مسئله به <code dir="auto">useRef</code>، <code dir="auto">useEffect</code>، <code dir="auto">Math.floor</code>،  <code dir="auto">useState</code>،   <code dir="auto">setInterval</code>  و <code dir="auto">Date</code> نیاز دارید.</p>
</details>
<h1>خواسته مسئله</h1>
<p>پیاده‌سازی‌های مورد نیاز را به کامپوننت <code dir="auto">Timer</code> اضافه کنید تا زمان‌سنج به درستی عمل کند. به‌خاطر داشته باشید هر زمانی که برای عملیات نجات ثبت می‌کنید، ممکن است نقشی حیاتی در تجزیه و تحلیل آینده و نجات سیاره آرکا داشته باشد. هر اشتباه کوچک در پیاده‌سازی، می‌تواند منجر به نابودی میلیون‌ها زندگی شود.</p>
<h1>نکات</h1>
<ul dir="auto">
<li>استایل‌های این کامپوننت نوشته شده و شما فقط باید لاجیک آن را اعمال کنید.</li>
<li><strong>از حذف یا ویرایش <code dir="auto">data-testid</code> های داده شده خودداری کنید.</strong></li>
<li>شما مجاز به نصب کتابخانه‌های خارجی از جمله <code dir="auto">npm</code> نیستید.</li>
<li>شما فقط مجاز به اعمال تغییرات در <strong><code dir="auto">Timer.jsx</code></strong> هستید.</li>
<li>با توجه به نوع سوال، ممکن است داوری کد شما مقداری زمان‌بر باشد.</li>
</ul>

