export function getTooltip(modelInput: string): string {
  switch (modelInput) {
    case "cs.AI":
      return "Yapay zeka ile ilgili konuları kapsar";
    case "cs.AR":
      return "Donanım mimarisi ile ilgili konuları kapsar";
    case "cs.CC":
      return "Hesaplama modelleri, karmaşıklık sınıfları, yapısal karmaşıklık, karmaşıklık tradeoff'ları, üst ve alt sınırlarını kapsar";
    case "cs.CE":
      return "Bilgisayar bilimini bilim, mühendislik ve finans alanlarındaki karmaşık sistemlerin matematiksel modellemesine uygulamalarını kapsar";
    case "cs.CG":
      return "Bilgisayar geometrisi ile ilgilidir";
    case "cs.CL":
      return "Doğal dil işleme ile ilgilidir";
    case "cs.CR":
      return "Kriptografi ve güvenlik konularını kapsar";
    case "cs.CV":
      return "Görüntü işleme, bilgisayar görüsü, desen tanıma ve sahne anlama konularını kapsar";
    case "cs.CY":
      return "Bilgisayarların toplum üzerindeki etkisini, bilgisayar etiği, bilgi teknolojisi ve kamu politikası, bilgisayarlar ve eğitim gibi konuları kapsar";
    case "cs.DB":
      return "Veritabanı yönetimi, veri madenciliği ve veri işleme konularını kapsar";
    case "cs.DC":
      return "Hata toleransı, dağıtık algoritmalar, paralel hesaplama ve küme hesaplama konularını kapsar";
    case "cs.DL":
      return "Dijital kütüphane tasarımı, doküman ve metin oluşturma konularını kapsar";
    case "cs.DM":
      return "Ayrık matematik ile ilgili konuları kapsar";
    case "cs.DS":
      return "Veri yapıları ve algoritma analizi konularını kapsar";
    case "cs.ET":
      return "Yükseltilmiş elektronik(kuantum bilgisayarlar, biyo-kimyasal bilgisayarlar) konularını kapsar";
    case "cs.FL":
      return "Otomata teorisi, gramer, biçimsel dil gibi konuları kapsar";
    case "cs.GL":
      return "Giriş trendleri ve gelecek trendlerini kapsayan araştırmaları kapsar";
    case "cs.GR":
      return "Grafik ile ilgili konuları kapsar";
    case "cs.GT":
      return "Mekanizma tasarımı, oyunlarda öğrenme ile ilgili konuları kapsar.";
    case "cs.HC":
      return "İnsan bilgisayar etkileşimi ile ilgili konuları kapsar";
    case "cs.IR":
      return "Bilgi geri kazanımı ile ilgili konuları kapsar";
    case "cs.IT":
      return "Bilgi teorisi ile ilgili konuları kapsar";
    case "cs.LG":
      return "Bilgisayar biliminde makine öğrenimi ile ilgili konuları kapsar";
    case "cs.LO":
      return "Mantık programlama ile ilgili konuları kapsar";
    case "cs.MA":
      return "Multiagent sistemleri ile ilgili konuları kapsar";
    case "cs.MM":
      return "Multimedya ile ilgili konuları kapsar";
    case "cs.MS":
      return "Mateamatiksel yazılım ile ilgili konuları kapsar";
    case "cs.NA":
      return "Numerik analiz ile ilgili konuları kapsar";
    case "cs.NE":
      return "Nöral ağlar ile ilgili konuları kapsar";
    case "cs.NI":
      return "Bilgisayar ağları ve iletişim ile ilgili konuları kapsar";
    case "cs.OH":
      return "Bilgisayar bilimini içeriyor ancak sınıflandırlamaya uymuyor";
    case "cs.OS":
      return "İşletim sistemleri ile ilgili konuları kapsar";
    case "cs.PF":
      return "Performans değerlendirmesi ve ölçümü ile ilgili konuları kapsar";
    case "cs.PL":
      return "Programlama dilleri ile ilgili konuları kapsar";
    case "cs.RO":
      return "Robotik ile ilgili konuları kapsar";
    case "cs.SC":
      return "Sembolik hesaplama ile ilgili konuları kapsar";
    case "cs.SD":
      return "Ses ve müzik ile ilgili konuları kapsar";
    case "cs.SE":
      return "Yazılım mühendisliği ile ilgili konuları kapsar";
    case "cs.SI":
      return "Sosyal ve bilgisayar ağları ile ilgili konuları kapsar";
    case "cs.SY":
      return "Sistem ve kontrol ile ilgili konuları kapsar";
    case "other":
      return "Bilgisayar bilimlerini içermiyor";
    default:
      return "Bilgisayar bilimlerini içermiyor";
  }
}
