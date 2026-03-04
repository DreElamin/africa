import pdfplumber

pdf = pdfplumber.open('C:/Users/alame/Downloads/Portfolio/africa/AT4D-Momentous.pdf')
print(f'Pages: {len(pdf.pages)}')
for i, page in enumerate(pdf.pages[:20]):
    print(f'\n=== PAGE {i+1} ===')
    text = page.extract_text()
    if text:
        print(text)
    else:
        print('[No text extracted]')
