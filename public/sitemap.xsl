<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — Aliante Homes for Sale</title>
        <style>
          body { margin: 0; font-family: Georgia, "Times New Roman", serif; background: #f7f9fc; color: #1a365d; }
          header { background: #1a365d; color: #fff; padding: 1.5rem 1.25rem; }
          header h1 { margin: 0 0 0.5rem; font-size: 1.5rem; }
          header p { margin: 0; max-width: 52rem; line-height: 1.5; color: #e2e8f0; font-size: 0.95rem; }
          main { max-width: 56rem; margin: 0 auto; padding: 1.5rem 1.25rem 3rem; }
          table { width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.08); }
          th, td { text-align: left; padding: 0.65rem 0.75rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem; }
          th { background: #edf2f7; font-family: system-ui, sans-serif; font-size: 0.75rem; letter-spacing: .04em; text-transform: uppercase; }
          a { color: #2c5aa0; }
          .note { margin: 0 0 1rem; font-size: 0.9rem; color: #4a5568; }
        </style>
      </head>
      <body>
        <header>
          <h1>XML sitemap</h1>
          <p>
            This file lists the public pages on AlianteHomesForSale.com for search engines.
            The yellow browser warning about “no style information” is gone because this stylesheet is attached.
            Google reads the XML; this table is for people.
          </p>
        </header>
        <main>
          <p class="note">
            <xsl:value-of select="count(s:urlset/s:url)"/> URLs.
            Submit <a href="https://www.aliantehomesforsale.com/sitemap.xml">https://www.aliantehomesforsale.com/sitemap.xml</a>
            in Google Search Console (not a screenshot of this page).
          </p>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last modified</th>
                <th>Change</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                  <td><xsl:value-of select="s:lastmod"/></td>
                  <td><xsl:value-of select="s:changefreq"/></td>
                  <td><xsl:value-of select="s:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
