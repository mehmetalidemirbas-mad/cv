import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda | Medikal Burada",
  description:
    "Medikal Burada olarak sağlık ve bakım ürünlerini güvenilir, hızlı ve uygun fiyatlarla sizlere ulaştırıyoruz.",
};

// İçerik kolayca düzenlenebilsin diye veriler tek yerde tutuluyor.
const features = [
  {
    title: "Hızlı ve Güvenli Kargo",
    desc: "Seçili ürünlerde hızlı gönderim ve güvenli teslimat",
    // truck
    d: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
  {
    title: "Güvenli Ödeme",
    desc: "Tüm alışverişleriniz güvenli ödeme altyapısı ile korunur",
    // shield-check
    d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "Sertifikalı Ürünler",
    desc: "Sağlık standartlarına uygun, onaylı medikal ürünler",
    // check-badge
    d: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z",
  },
  {
    title: "Kolay İade",
    desc: "İade ve değişim süreçlerinde hızlı ve kolay çözüm",
    // arrow-path
    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
  },
];

export default function HakkimizdaPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-sm"
      >
        <Link href="/" className="text-zinc-500 hover:text-green-600">
          Anasayfa
        </Link>
        <span className="text-zinc-300">/</span>
        <span className="text-zinc-500">Sayfalar</span>
        <span className="text-zinc-300">/</span>
        <span className="font-medium text-zinc-900 dark:text-zinc-100">
          Hakkımızda
        </span>
      </nav>

      {/* Başlık */}
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        Hakkımızda
      </h1>

      {/* Giriş metni */}
      <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Medikal Burada olarak, sağlık ve bakım ürünlerini güvenilir, hızlı ve
        uygun fiyatlarla sizlere ulaştırmak için çalışıyoruz. İnkontinans
        yönetiminden yara bakımına, ölçüm aletlerinden tedavi cihazlarına kadar
        geniş ürün yelpazemizle hem bireysel kullanıcıların hem de kurumların
        ihtiyaçlarına çözüm sunuyoruz. Tüm ürünlerimiz sağlık standartlarına
        uygun ve onaylıdır.
      </p>

      {/* Özellik kartları */}
      <section className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
              className="h-12 w-12 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={feature.d}
              />
            </svg>
            <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {feature.title}
            </h3>
            <p className="mt-2 max-w-[15rem] text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {feature.desc}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
