<script>
export default {
    name: 'Header'
}
</script>

<template>
    <div class="responsive-header fixed-top shadow-sm">
        <div class="container">
            <a href="/">
                <span class="text-size-lg">aytacmalkoc</span>
            </a>
            <button id="menu-button" class="hamburger" type="button">
                <span class="hamburger-lines-wrapper">
                    <span class="hamburger-lines"></span>
                </span>
            </button>
        </div>
        <div class="responsive-header-menu"></div>
    </div>

    <header id="header-global" class="fixed-top shadow-sm">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="header-left">
                    <a class="logo-default scroll-link" href="/">
                        <span class="text-size-lg">aytacmalkoc</span>
                    </a>
                    <a class="logo-alt scroll-link" href="/">
                        <span class="text-size-lg">aytacmalkoc</span>
                    </a>
                </div>

                <div class="header-right">
                    <div class="main-navigation menu-dark">
                        <ul class="sf-menu scrollspy nav dark-nav-on-load dark-nav-on-scroll">
                            <li>
                                <a href="/" class="nav-link">anasayfa</a>
                            </li>
                            <li>
                                <a href="/blog.html" class="nav-link">blog</a>
                            </li>
                            <li>
                                <a href="/open-source.html" class="nav-link">
                                    open source
                                    <i class="fas fa-heart fa-xs"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.github.com/aytacmalkoc" target="_blank" class="nav-link">
                                    github
                                    <i class="fas fa-external-link fa-xs"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>