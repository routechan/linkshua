const Footer = () => {
  return (
    <footer className="py-6 border-t bg-sub">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} リンクシェア - みんなでリンク集を共有
        </div>
        {/* <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            プライバシーポリシー
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            利用規約
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            お問い合わせ
          </a>
        </nav> */}
      </div>
    </div>
  </footer>
  )
}

export default Footer