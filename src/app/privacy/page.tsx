'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPolicy() {
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
              <Shield className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Policy</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              PT ASIA INVESTMENT FUND berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
              <span className="text-blue-200 text-sm">Terakhir diperbarui: 1 Januari 2024</span>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Eye className="mr-3 text-blue-400" size={24} />
                  Pendahuluan
                </h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Selamat datang di Privacy Policy PT ASIA INVESTMENT FUND. Dokumen ini menjelaskan bagaimana kami mengumpulkan, 
                    menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika menggunakan layanan keuangan dan investasi kami.
                  </p>
                  <p>
                    PT ASIA INVESTMENT FUND ("kami", "perusahaan") sangat menghargai privasi Anda dan berkomitmen untuk 
                    melindungi data pribadi Anda sesuai dengan hukum dan peraturan yang berlaku di Indonesia.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Database className="mr-3 text-blue-400" size={24} />
                  Informasi yang Kami Kumpulkan
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Informasi Pribadi</h3>
                    <ul className="space-y-2 text-blue-200">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Nama lengkap, tanggal lahir, dan informasi identitas lainnya</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Alamat email, nomor telepon, dan alamat rumah</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Informasi KTP, NPWP, dan dokumen identifikasi lainnya</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Informasi rekening bank dan data keuangan</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Informasi Keuangan</h3>
                    <ul className="space-y-2 text-blue-200">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Data investasi dan portofolio</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Histori transaksi dan aktivitas akun</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Informasi profil risiko dan tujuan investasi</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Informasi Teknis</h3>
                    <ul className="space-y-2 text-blue-200">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Alamat IP dan informasi perangkat</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Data cookies dan tracking technologies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Informasi penggunaan website dan aplikasi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <UserCheck className="mr-3 text-blue-400" size={24} />
                  Penggunaan Informasi
                </h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Kami menggunakan informasi yang kami kumpulkan untuk tujuan-tujuan berikut:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Menyediakan Layanan:</strong> Memproses transaksi investasi, mengelola akun, dan menyediakan layanan keuangan yang Anda minta.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Verifikasi Identitas:</strong> Mematuhi peraturan KYC (Know Your Customer) dan AML (Anti-Money Laundering).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Komunikasi:</strong> Mengirimkan informasi penting tentang akun, transaksi, dan pembaruan layanan.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Analisis dan Peningkatan:</strong> Menganalisis penggunaan untuk meningkatkan layanan dan pengalaman pengguna.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Keamanan:</strong> Mendeteksi dan mencegah aktivitas penipuan atau pencurian identitas.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Kepatuhan Hukum:</strong> Mematuhi kewajiban hukum dan peraturan yang berlaku.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Lock className="mr-3 text-blue-400" size={24} />
                  Keamanan Data
                </h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    PT ASIA INVESTMENT FUND mengimplementasikan langkah-langkah keamanan yang komprehensif untuk melindungi informasi pribadi Anda:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600">
                      <h3 className="text-white font-semibold mb-2">Enkripsi</h3>
                      <p className="text-sm">Semua data transmisi menggunakan enkripsi SSL/TLS 256-bit</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600">
                      <h3 className="text-white font-semibold mb-2">Akses Terbatas</h3>
                      <p className="text-sm">Hanya personel berwenang yang dapat mengakses data pribadi</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600">
                      <h3 className="text-white font-semibold mb-2">Monitoring 24/7</h3>
                      <p className="text-sm">Sistem keamanan dipantau secara terus-menerus</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600">
                      <h3 className="text-white font-semibold mb-2">Backup Reguler</h3>
                      <p className="text-sm">Data di-backup secara teratur dan aman</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FileText className="mr-3 text-blue-400" size={24} />
                  Pembagian Informasi
                </h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk keperluan pemasaran. 
                    Informasi Anda hanya akan dibagikan dalam keadaan berikut:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Dengan persetujuan Anda yang jelas dan eksplisit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Kepada mitra bisnis yang membantu menyediakan layanan (bank, kustodian, dll)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Kepada otoritas regulasi dan pemerintah sesuai ketentuan hukum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Dalam kasus penjualan atau merger perusahaan</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Hak Anda</h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Sebagai pemilik data, Anda memiliki hak-hak berikut sesuai dengan peraturan perlindungan data:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan tentang Anda.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Hak Koreksi:</strong> Memperbaiki data pribadi yang tidak akurat atau tidak lengkap.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Hak Penghapusan:</strong> Meminta penghapusan data pribadi dalam keadaan tertentu.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Hak Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <div>
                        <strong className="text-white">Hak Portabilitas:</strong> Menerima data dalam format terstruktur dan dapat dibaca mesin.
                      </div>
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
                    Jika Anda memiliki pertanyaan tentang Privacy Policy ini atau ingin menggunakan hak-hak Anda, 
                    silakan hubungi kami:
                  </p>
                  <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
                    <div className="space-y-3">
                      <p><strong className="text-white">Email:</strong> privacy@asiainvestmentfund.co.id</p>
                      <p><strong className="text-white">Telepon:</strong> 085285703582</p>
                      <p><strong className="text-white">Alamat:</strong> GRAND INDONESIA Jl. M.H Thamrin No. 1 Kel. Menteng, Kec. Menteng, Kota Adm. Jakarta Pusat, Prov. DKI Jakarta</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Pembaruan Kebijakan</h2>
                <div className="space-y-4 text-blue-200">
                  <p>
                    Kami dapat memperbarui Privacy Policy ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami 
                    atau perubahan peraturan yang berlaku. Versi terbaru akan selalu tersedia di website kami.
                  </p>
                  <p>
                    Perubahan materi akan diberitahukan kepada Anda melalui email atau pemberitahuan di platform kami. 
                    Penggunaan terus-menerus layanan kami setelah perubahan menandakan penerimaan Anda terhadap kebijakan yang diperbarui.
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