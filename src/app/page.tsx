'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, TrendingUp, Users, Target, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">PT ASIA INVESTMENT FUND</h1>
                <p className="text-xs text-blue-200">Trust & Financial Excellence</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-blue-300 transition-colors">Beranda</a>
              <a href="#about" className="text-white hover:text-blue-300 transition-colors">Tentang</a>
              <a href="#services" className="text-white hover:text-blue-300 transition-colors">Layanan</a>
              <a href="#meta-ads" className="text-white hover:text-blue-300 transition-colors">Meta Ads</a>
              <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Kontak</a>
              <Button className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600">
                Mulai Investasi
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
              <nav className="flex flex-col space-y-3 mt-4">
                <a href="#home" className="text-white hover:text-blue-300 transition-colors">Beranda</a>
                <a href="#about" className="text-white hover:text-blue-300 transition-colors">Tentang</a>
                <a href="#services" className="text-white hover:text-blue-300 transition-colors">Layanan</a>
                <a href="#meta-ads" className="text-white hover:text-blue-300 transition-colors">Meta Ads</a>
                <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Kontak</a>
                <Button className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 w-full">
                  Mulai Investasi
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm">
                🏆 Terpercaya Sejak 2020
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              PT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">ASIA INVESTMENT FUND</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Solusi Terpercaya untuk Pendanaan dan Entitas Keuangan Anda
            </p>
            <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
              Kami menghadirkan investasi yang aman, transparan, dan menguntungkan dengan dukungan teknologi Meta Ads terkini
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-4 text-lg">
                Mulai Investasi <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="text-white/60 rotate-90" size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">PT ASIA INVESTMENT FUND</span></h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Perusahaan terkemuka dalam bidang trust, pendanaan, dan entitas keuangan yang berkomitmen memberikan layanan terbaik bagi klien
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Kepercayaan adalah Prioritas</h3>
                    <p className="text-blue-200">Kami membangun fondasi bisnis berdasarkan kepercayaan dan transparansi absolut dengan setiap klien.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Pertumbuhan Berkelanjutan</h3>
                    <p className="text-blue-200">Strategi investasi yang terukur dan terbukti memberikan hasil optimal untuk jangka panjang.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Tim Profesional</h3>
                    <p className="text-blue-200">Didukung oleh para ahli keuangan berpengalaman yang siap membantu mencapai tujuan finansial Anda.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Informasi Perusahaan</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-400" size={20} />
                  <div>
                    <p className="text-sm text-blue-200">Alamat</p>
                    <p className="text-white">GRAND INDONESIA Jl. M.H Thamrin No. 1 Kel. Menteng, Kec. Menteng, Kota Adm. Jakarta Pusat, Prov. DKI Jakarta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400" size={20} />
                  <div>
                    <p className="text-sm text-blue-200">Telepon</p>
                    <p className="text-white">085285703582</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <div>
                    <p className="text-sm text-blue-200">Email</p>
                    <p className="text-white">info@asiainvestmentfund.co.id</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Unggulan</span></h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan investasi dan keuangan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Investment Planning</h3>
                <p className="text-blue-200 mb-6">Perencanaan investasi strategis yang disesuaikan dengan tujuan finansial dan profil risiko Anda.</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-blue-100">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    Analisis profil risiko komprehensif
                  </li>
                  <li className="flex items-center text-blue-100">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    Portfolio diversifikasi
                  </li>
                  <li className="flex items-center text-blue-100">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    Monitoring real-time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Trust Fund Management</h3>
                <p className="text-blue-200 mb-6">Manajemen dana trust profesional dengan keamanan dan transparansi terjamin.</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-blue-100">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    Kustodian terpercaya
                  </li>
                  <li className="flex items-center text-blue-100">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    Laporan transparan
                  </li>
                  <li className="flex items-center text-blue-100">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    Proteksi aset maksimal
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Financial Advisory</h3>
                <p className="text-blue-200 mb-6">Konsultasi keuangan mendalam untuk optimasi pertumbuhan kekayaan Anda.</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-blue-100">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    Konsultasi 1-on-1
                  </li>
                  <li className="flex items-center text-blue-100">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    Strategi personalisasi
                  </li>
                  <li className="flex items-center text-blue-100">
                    <CheckCircle className="text-green-400 mr-2" size={16} />
                    Support 24/7
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meta Ads Section */}
      <section id="meta-ads" className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Integrasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Meta Ads</span></h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Menggunakan teknologi Meta Ads terkini untuk meningkatkan jangkauan dan efektivitas investasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Keunggulan Meta Ads Integration</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Targeted Marketing</h4>
                      <p className="text-blue-200">Jangkau investor potensial dengan presisi tinggi menggunakan algoritma Meta</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Real-time Analytics</h4>
                      <p className="text-blue-200">Monitor performa investasi dengan dashboard analitik real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">AI-Powered Insights</h4>
                      <p className="text-blue-200">Dapatkan rekomendasi investasi berbasis AI dan machine learning</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Social Trading</h4>
                      <p className="text-blue-200">Ikuti strategi investor sukses dan belajar dari komunitas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">500K+</div>
                <p className="text-blue-200">Active Users</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 p-6 rounded-xl border border-emerald-500/30 backdrop-blur-sm">
                <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
                <p className="text-blue-200">Success Rate</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <p className="text-blue-200">Support</p>
              </div>
              <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 p-6 rounded-xl border border-orange-500/30 backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-400 mb-2">15%</div>
                <p className="text-blue-200">Avg. Returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Siap Memulai Perjalanan Investasi Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan investor yang telah mempercayai PT ASIA INVESTMENT FUND untuk masa depan finansial mereka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              Daftar Sekarang <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Kami</span></h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Tim kami siap membantu Anda mencapai tujuan investasi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Telepon</h3>
                <p className="text-blue-200">085285703582</p>
                <p className="text-blue-300 text-sm mt-2">Senin - Jumat, 09:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-blue-200">info@asiainvestmentfund.co.id</p>
                <p className="text-blue-300 text-sm mt-2">Respon dalam 24 jam</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Kantor Pusat</h3>
                <p className="text-blue-200">GRAND INDONESIA</p>
                <p className="text-blue-300 text-sm mt-2">Jl. M.H Thamrin No. 1 Jakarta Pusat</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">PT ASIA INVESTMENT FUND</h3>
                  <p className="text-xs text-blue-200">Trust & Financial Excellence</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm">
                Perusahaan terpercaya dalam bidang trust, pendanaan, dan entitas keuangan.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-blue-400 text-sm">Investment Planning</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 text-sm">Trust Fund Management</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 text-sm">Financial Advisory</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 text-sm">Meta Ads Integration</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-blue-400 text-sm">Tentang Kami</a></li>
                <li><a href="/privacy" className="text-blue-200 hover:text-blue-400 text-sm">Privacy Policy</a></li>
                <li><a href="/terms" className="text-blue-200 hover:text-blue-400 text-sm">Terms & Conditions</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 text-sm">Karir</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Kontak</h4>
              <div className="space-y-2">
                <p className="text-blue-200 text-sm">📞 085285703582</p>
                <p className="text-blue-200 text-sm">✉️ info@asiainvestmentfund.co.id</p>
                <p className="text-blue-200 text-sm">📍 GRAND INDONESIA, Jakarta Pusat</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 text-sm mb-4 md:mb-0">
                © 2024 PT ASIA INVESTMENT FUND. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="/privacy" className="text-blue-200 hover:text-blue-400 text-sm">Privacy Policy</a>
                <a href="/terms" className="text-blue-200 hover:text-blue-400 text-sm">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}