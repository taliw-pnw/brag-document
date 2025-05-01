# January 2024

เดือนมกราคมที่ผ่านมาแทบจะไม่ได้ทำอะไรที่รู้สึกว่าเป็นชิ้นเป็นอันเลย จะมีที่เป็นรูปเป็นร่างหน่อยก็ทำเว็บ [URL Shortener](https://url.taliwhub.dev/) ใช้เอง

![URL Shortener from TaliwHub](/images/2024/january/url_taliwhub_dev.jpeg)

ที่มาขอเว็บนี้แทบจะไม่มีอะไรเลย เพียงแค่อยากมี url shortener ใช้เอง เพราะวางแผนจะซื้อ domain ของตัวเองเมื่อต้นเดือนกุมภาพันธ์ที่ผ่านมา

โดยเว็บนี้พัฒนาด้วย NextJS + TypeScript, DaisyUI + Tailwind CSS โดยมี API เป็น NextJS + TypeScript และมี Database เป็น KV Database หรือ Radis ที่อยู่บน Vercel นั่นเอง

---

นอกจาก URL Shortener แล้ว สิ่งที่ได้พัฒนาตัวเองเพิ่มขึ้นจากเดิมก็คงจะเป็นการแบ่ง Scheme ของ Application บน iOS ในส่วนของ Flutter และ React Native ที่ได้ลองทำดู

ในฝั่งของ Flutter แบ่งง่ายมาก ใช้เวลาไม่นานเลย แล้วก็ยังได้เขียน Makefile เพื่อให้คนอื่น ๆ สามารถ build app ผ่าน command line ได้ง่าย ๆ อีกด้วย ไม่จำเป็นต้องมาเลือก Scheme ที่ต้องการจะ build ใน XCode แต่วิธีนี้จำเป็นต้องนำ IPA File ไป Upload เองอะนะ

ในฝั่งของ React Native ก็แอบลำบากนิดนึง เพราะมีการดึงข้อมูลจาก .env มาใช้ด้วย สุดจัด!! ข้อมูลที่เอามาจาก .env ก็จะมีทั้ง app bundle id และ app name และนอกจากนี้ก็จะแบ่งไฟล์ Google Service ออกด้วย แต่ยังไม่ได้ทำเลย วิ่งหนีไปทำ Android ก่อน

---

ในปีนี้ ODDS ก็ยังได้จัดงานปีใหม่ด้วยนะ ผมเลยตั้งชื่อให้ว่า **ODDS| Friday Night 2024** บอกเลยว่า สนุกมากกกก...กกกกก ก. ไก่ล้านตัว ถ้ามีอีกรอบหน้า อยากจะขอหมอลำหน่อยนะครับ อยากใส่สเตปโจ๊ะ ไ

![ODDS Night 2024](/images/2024/january/odds-night-2024-1.jpeg)

![ODDS Night 2024](/images/2024/january/odds-night-2024-2.jpeg)
