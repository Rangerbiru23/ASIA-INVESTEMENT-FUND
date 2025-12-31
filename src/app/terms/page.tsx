'use client'

import { useState, useEffect } from 'react'
import { Link } from 'next/link'
import { ArrowLeft, FileText, Shield, AlertCircle, CheckCircle, Scale, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function TermsAndConditions() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">PT ASIA INVESTMENT FUND</h1>
                <p className="text-xs text-blue-200">Trust & Financial Excellence</p>
              </div>
            </Link>

            <Link href="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <ArrowLeft className="mr-2" size={16} />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-6">
              <FileText className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Conditions</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Syarat dan ketentuan penggunaan layanan PT ASIA INVESTMENT FUND
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
              <span className="text-blue-200 text-sm">Terakhir diperbarui: 1 Januari 2024</span>
            </div>
          </div>

          {/* Terms Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Acceptance of Terms */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="mr-3 text-green-400" size={24} />
                  Penerimaan Syarat dan Ketentuan
                </h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Dengan mengakses dan menggunakan layanan PT ASIA INVESTMENT FUND ("Perusahaan"), Anda setuju untuk 
                    terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                    Anda tidak boleh menggunakan layanan kami.
                  </p>
                  <p>
                    Penggunaan layanan kami juga tunduk pada Kebijakan Privasi kami, yang mengatur bagaimana kami 
                    mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="mr-3 text-blue-400" size={24} />
                  Deskripsi Layanan
                </h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    PT ASIA INVESTMENT FUND menyediakan layanan keuangan dan investasi meliputi:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span><strong>Investment Planning:</strong> Perencanaan investasi strategis dan personalisasi portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span><strong>Trust Fund Management:</strong> Manajemen dana trust profesional dan transparan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span><strong>Financial Advisory:</strong> Konsultasi keuangan mendalam dan berkelanjutan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span><strong>Meta Ads Integration:</strong> Platform investasi dengan teknologi Meta Ads</span>
                    </li>
                  </ul>
                  <p>
                    Perusahaan berhak mengubah, menangguhkan, atau menghentikan layanan kapan saja dengan atau tanpa pemberitahuan sebelumnya.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <AlertCircle className="mr-3 text-orange-400" size={24} />
                  Tanggung Jawab Pengguna
                </h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Sebagai pengguna layanan kami, Anda setuju untuk:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Informasi Akurat:</strong> Memberikan informasi yang benar, akurat, dan lengkap saat pendaftaran dan pembaruan data.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Keamanan Akun:</strong> Menjaga kerahasiaan kata sandi dan informasi akun Anda.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Penggunaan Legal:</strong> Menggunakan layanan untuk tujuan legal dan sesuai dengan peraturan yang berlaku.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Kepatuhan:</strong> Mematuhi semua hukum dan peraturan yang berlaku terkait investasi dan keuangan.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Pelaporan:</strong> Segera melaporkan aktivitas mencurigakan atau tidak sah ke Perusahaan.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Investment Risks */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <AlertCircle className="mr-3 text-red-400" size={24} />
                  Risiko Investasi
                </h2>
                <div className="space-y-4 text-blue-200">
                  <p className="text-orange-200 font-semibold">
                    PENTING: Semua investasi mengandung risiko. Nilai investasi dapat naik atau turun.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">⚠</span>
                      <span><strong>Risiko Pasar:</strong> Nilai investasi dapat berfluktuasi karena kondisi pasar.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">⚠</span>
                      <span><strong>Risiko Likuiditas:</strong> Beberapa investasi mungkin sulit dijual cepat.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">⚠</span>
                      <span><strong>Risiko Kredit:</strong> Risiko default dari penerbit instrumen keuangan.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">⚠</span>
                      <span><strong>Risiko Mata Uang:</strong> Fluktuasi nilai tukar dapat mempengaruhi nilai investasi.</span>
                    </li>
                  </ul>
                  <p>
                    Anda bertanggung jawab penuh atas keputusan investasi Anda. Perusahaan tidak bertanggung jawab 
                    atas kerugian yang timbul dari keputusan investasi Anda.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Fees and Payments */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Biaya dan Pembayaran</h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Biaya yang berlaku untuk layanan kami meliputi:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600">
                      <h3 className="text-white font-semibold mb-2">Biaya Manajemen</h3>
                      <p className="text-sm">0.5% - 2% per tahun dari nilai aset yang dikelola</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600">
                      <h3 className="text-white font-semibold mb-2">Biaya Transaksi</h3>
                      <p className="text-sm">Bervariasi tergantung jenis instrumen dan volume</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600">
                      <h3 className="text-white font-semibold mb-2">Biaya Penarikan</h3>
                      <p className="text-sm">Rp 50.000 - Rp 500.000 per transaksi</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600">
                      <h3 className="text-white font-semibold mb-2">Biaya Konsultasi</h3>
                      <p className="text-sm">Rp 1.000.000 - Rp 5.000.000 per sesi</p>
                    </div>
                  </div>
                  <p>
                    Semua biaya akan diinformasikan secara transparan sebelum transaksi dilakukan. 
                    Perusahaan berhak mengubah biaya dengan pemberitahuan 30 hari sebelumnya.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="mr-3 text-purple-400" size={24} />
                  Hak Kekayaan Intelektual
                </h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Semua konten, merek dagang, logo, dan hak kekayaan intelektual lainnya yang terdapat 
                    dalam layanan kami adalah milik PT ASIA INVESTMENT FUND atau pemberi lisensi kami.
                  </p>
                  <p>
                    Anda dilarang:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span>Menyalin, memodifikasi, atau mendistribusikan konten tanpa izin tertulis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span>Menggunakan merek dagang atau logo kami untuk tujuan komersial</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span>Membuat karya turunan dari layanan kami</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Scale className="mr-3 text-yellow-400" size={24} />
                  Pembatasan Tanggung Jawab
                </h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Sejauh diizinkan oleh hukum, PT ASIA INVESTMENT FUND tidak bertanggung jawab atas:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Kerugian tidak langsung, insidental, atau konsekuensial</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Kehilangan keuntungan atau peluang bisnis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Kerugian yang disebabkan oleh gangguan layanan atau force majeure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Kerugian akibat keputusan investasi Anda</span>
                    </li>
                  </ul>
                  <p>
                    Tanggung jawab maksimum Perusahaan terbatas pada jumlah biaya yang Anda bayarkan 
                    kepada Perusahaan dalam 12 bulan terakhir.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Clock className="mr-3 text-blue-400" size={24} />
                  Pengakhiran Layanan
                </h2>
                <div className="space-y-4 text-blue-200">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Pengakhiran oleh Pengguna</h3>
                    <p>
                      Anda dapat mengakhiri penggunaan layanan kami kapan saja dengan:
                    </p>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Memberikan pemberitahuan tertulis 30 hari sebelumnya</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Menyelesaikan semua kewajiban keuangan yang tersisa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Menarik semua investasi sesuai prosedur yang berlaku</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Pengakhiran oleh Perusahaan</h3>
                    <p>
                      Perusahaan dapat mengakhiri layanan jika:
                    </p>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Anda melanggar syarat dan ketentuan ini</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Anda terlibat dalam aktivitas ilegal atau penipuan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Diperlukan oleh hukum atau peraturan yang berlaku</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Penyelesaian Sengketa</h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Sengketa yang timbul dari atau terkait dengan penggunaan layanan kami akan diselesaikan melalui:
                  </p>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 font-bold">1.</span>
                      <div>
                        <strong className="text-white">Negosiasi:</strong> Upaya penyelesaian secara damiah antara kedua belah pihak.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 font-bold">2.</span>
                      <div>
                        <strong className="text-white">Mediasi:</strong> Proses mediasi dengan mediator netral yang disepakati bersama.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 font-bold">3.</span>
                      <div>
                        <strong className="text-white">Arbitrase:</strong> Jika mediasi gagal, sengketa akan diselesaikan melalui arbitrase Badan Arbitrase Nasional Indonesia (BANI).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 font-bold">4.</span>
                      <div>
                        <strong className="text-white">Yurisdiksi:</strong> Untuk hal-hal di luar arbitrase, pengadilan negeri Jakarta Pusat memiliki yurisdiksi eksklusif.
                      </div>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Hukum yang Berlaku</h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                    Setiap sengketa yang timbul dari atau terkait dengan syarat dan ketentuan ini akan tunduk 
                    pada yurisdiksi eksklusif pengadilan negeri Jakarta Pusat.
                  </p>
                  <p>
                    Peraturan terkait yang berlaku:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Undang-Undang Pasar Modal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Undang-Undang Jasa Keuangan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Peraturan Otoritas Jasa Keuangan (OJK)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Undang-Undang Perlindungan Data Pribadi</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Hubungi Kami</h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Jika Anda memiliki pertanyaan tentang Terms and Conditions ini, silakan hubungi kami:
                  </p>
                  <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
                    <div className="space-y-3">
                      <p><strong className="text-white">Email:</strong> legal@asiainvestmentfund.co.id</p>
                      <p><strong className="text-white">Telepon:</strong> 085285703582</p>
                      <p><strong className="text-white">Alamat:</strong> GRAND INDONESIA Jl. M.H Thamrin No. 1 Kel. Menteng, Kec. Menteng, Kota Adm. Jakarta Pusat, Prov. DKI Jakarta</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Tim hukum kami siap membantu menjelaskan setiap ketentuan yang mungkin tidak Anda mengerti.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">PT ASIA INVESTMENT FUND</h3>
                <p className="text-xs text-blue-200">Trust & Financial Excellence</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              © 2024 PT ASIA INVESTMENT FUND. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-blue-200 hover:text-blue-400 text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-200 hover:text-blue-400 text-sm">Terms & Conditions</Link>
              <Link href="/" className="text-blue-200 hover:text-blue-400 text-sm">Beranda</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}