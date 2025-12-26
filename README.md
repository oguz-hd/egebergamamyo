# 🌐 GitHub Pages Yayınlama ve Yapılandırma Rehberi

Bu rehber, mevcut bir deponun (repository) GitHub Pages üzerinden nasıl yayına alınacağını ve web sitesi dosyalarının doğru çalışması için nasıl yapılandırılması gerektiğini anlatır.

---

## 🏗 1. Web Sitesi Dosya Yapısı

GitHub Pages'in projenizi bir web sitesi olarak tanıması için dosyaların belirli bir düzende olması gerekir.

* **`index.html`:** Sitenizin giriş kapısıdır. Mutlaka **ana dizinde (root)** ve küçük harflerle isimlendirilmiş olmalıdır.
* **Varlıklar (Assets):** CSS, JS ve Görsel dosyalarınızı klasörleyerek (örn: `/css`, `/js`, `/img`) düzenli tutun.
* **Dosya Yolları:** Kodunuzdaki dosya yollarının (path) "case-sensitive" (büyük/küçük harf duyarlı) olduğunu unutmayın.

<img src="./media/1.png" width="100%" alt="Dosya Yapısı">
---

## ⚙️ 2. GitHub Pages Servisini Aktif Etme

Dosyalarınız hazırsa, yayın sürecini başlatmak için şu adımları izleyin:

### Adım A: Settings Menüsüne Giriş
Deponuzun üst panelinde bulunan **Settings** sekmesine tıklayın. Ardından sol menüdeki "Code and automation" bölümünden **Pages** seçeneğine gidin.

<img src="./media/2.png" width="100%" alt="Dosya Yapısı">


### Adım B: Branch ve Klasör Seçimi
GitHub Pages'in hangi koddaki veriyi yayınlayacağını seçmeniz gerekir:
1. **Source** kısmında "Deploy from a branch" seçili olmalıdır.
2. **Branch** açılır menüsünden `main` (veya `master`) dalını seçin.
3. Klasör olarak `/(root)` seçeneğini belirleyin ve **Save** butonuna tıklayın.

<img src="./media/3.png" width="100%" alt="Dosya Yapısı">


---

## 🚀 3. Yayın Durumunu Takip Etme

Save butonuna bastıktan sonra GitHub arka planda bir "Action" başlatır.

1. Üst menüdeki **Actions** sekmesine tıklayarak kurulum aşamasını canlı izleyebilirsiniz.
2. İşlem tamamlandığında (yeşil tik olduğunda), **Settings > Pages** ekranına geri dönün.
3. En üstte **"Your site is live at..."** ibaresini göreceksiniz.

<img src="./media/4.png" width="100%" alt="Dosya Yapısı">


---

## 🛠 Sıkça Karşılaşılan Sorunlar ve Çözümleri

| Sorun | Çözüm |
| :--- | :--- |
| **404 Not Found** | `index.html` dosyasının ana dizinde olduğundan ve isminin doğru olduğundan emin olun. |
| **CSS/Resimler Yüklenmiyor** | Dosya yollarını kontrol edin. GitHub Pages `/` ile başlayan yollarda bazen ana dizini karıştırabilir; `./` kullanmayı deneyin. |
| **Site Güncellenmiyor** | Değişiklikleri pushladıktan sonra Actions sekmesinden işlemin bitmesini bekleyin ve tarayıcı önbelleğini temizleyin (CTRL+F5). |

---
