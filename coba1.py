from flask import Flask, request, jsonify
import MySQLdb

app = Flask(__name__)

# Koneksi ke database
db = MySQLdb.connect(host="localhost", user="root", password="password", database="mydatabase")
cursor = db.cursor()

# Endpoint untuk GET semua data
@app.route('/data', methods=['GET'])
def get_all_data():
    # Jalankan query SQL untuk mengambil semua data
    cursor.execute('SELECT * FROM mytable')
    data = cursor.fetchall()

    # Ubah data menjadi format JSON
    json_data = []
    for row in data:
        json_data.append({
            'id': row[0],
            'name': row[1],
            'price': row[2]
        })

    # Kembalikan respon JSON
    return jsonify(json_data)

# Endpoint untuk GET data berdasarkan ID
@app.route('/data/<int:id>', methods=['GET'])
def get_data_by_id(id):
    # Jalankan query SQL untuk mengambil data berdasarkan ID
    cursor.execute('SELECT * FROM mytable WHERE id = %s', (id,))
    data = cursor.fetchone()

    # Periksa apakah data ditemukan
    if data is None:
        return jsonify({'message': 'Data tidak ditemukan'}), 404

    # Ubah data menjadi format JSON
    json_data = {
        'id': data[0],
        'name': data[1],
        'price': data[2]
    }

    # Kembalikan respon JSON
    return jsonify(json_data)

# Endpoint untuk CREATE data baru
@app.route('/data', methods=['POST'])
def create_data():
    # Dapatkan data dari request body
    data = request.get_json()
    name = data['name']
    price = data['price']

    # Jalankan query SQL untuk menambahkan data baru
    cursor.execute('INSERT INTO mytable (name, price) VALUES (%s, %s)', (name, price))
    db.commit()

    # Kembalikan respon JSON
    return jsonify({'message': 'Data berhasil ditambahkan'})

# Endpoint untuk UPDATE data berdasarkan ID
@app.route('/data/<int:id>', methods=['PUT'])
def update_data(id):
    # Dapatkan data dari request body
    data = request.get_json()
    name = data['name']
    price = data['price']

    # Jalankan query SQL untuk memperbarui data
    cursor.execute('UPDATE mytable SET name = %s, price = %s WHERE id = %s', (name, price, id))
    db.commit()

    # Kembalikan respon JSON
    return jsonify({'message': 'Data berhasil diperbarui'})

# Endpoint untuk DELETE data berdasarkan ID
@app.route('/data/<int:id>', methods=['DELETE'])
def delete_data(id):
    # Jalankan query SQL untuk menghapus data
    cursor.execute('DELETE FROM mytable WHERE id = %s', (id,))
    db.commit()

    # Kembalikan respon JSON
    return jsonify({'message': 'Data berhasil dihapus'})

if __name__ == '__main__':
    app.run(debug=True)
