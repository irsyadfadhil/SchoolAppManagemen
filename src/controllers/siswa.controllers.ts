import { Request, Response } from 'express';

import { connect } from '../database'
import { SiswaData } from '../interface/SiswaData';

export async function DataSemuaSiswa(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const courses = await conn.query('SELECT * FROM data_siswa');
    return res.json(courses[0]);
}

export async function BuatDataSiswa(req: Request, res: Response) {
    const DataSiswaPost: SiswaData = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO data_siswa SET ?', [DataSiswaPost]);
    return res.json({
        message: 'Data Siswa Berhasil Dibuat'
    });
}

export async function DataSiswa(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM data_siswa WHERE id = ?', [id]);

    return res.json(post[0]);
}

export async function HapusDataSiswa(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM data_siswa WHERE id = ?', [id]);
    return res.json({
        message: 'Data Siswa Berhasil Dihapus'
    });
}

export async function PerbaharuiDataSiswa(req: Request, res: Response) {
    const id = req.params.id;
    const updateParkingData: SiswaData = req.body;
    const conn = await connect();
    await conn.query('UPDATE parking_data SET ? WHERE id = ?', [updateParkingData, id]);
    return res.json({
        message: 'Data Siswa Berhasil Diperbaharui'
    });
}
