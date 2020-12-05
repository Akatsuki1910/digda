fr = open('./css/style.css', 'r', encoding='UTF-8')
text = fr.read()
# text = text.replace("\n", " ").replace("\t", " ")

fw = open('../digda/css.js', 'w', encoding='UTF-8')
text = 'export const css = `' + text + '`;'
fw.write(text)

fr.close()
fw.close()