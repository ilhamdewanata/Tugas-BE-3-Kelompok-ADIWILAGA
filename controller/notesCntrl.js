import { query } from "../database/db.js"

export const getLandingPage = async(req,res)=>{
    try {
        return res.status(200).json("Selamat datang di backend!!!");
    } catch (e) {
        console.log("terjadi error...", e);
        return res.status(500).json({ msg: "terjadi kesalahan pada server" });
    }
}

export const getDataNotes = async(req,res)=>{
    try{
        const result = await query('Select * from notes')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertDataNotes = async(req,res)=>{
    const {title, datetime, note}= req.body
    try {
        await query("INSERT INTO notes (`title`, `datetime`, `note`) values (?,?,?)", 
        [title, datetime, note])
        return res.status(200).json({msg:"Notes Ditambahkan"})
    } catch (e) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateDataNotes = async(req,res)=>{
    const {title, datetime, note}= req.body
    const {id}=req.params
    try {
        await query("UPDATE notes SET title=?, datetime=?, note=? where id=?", [title, datetime, note, id])
        return res.status(200).json({msg:"Notes Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteDataNotes = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM notes where id=?", [id])
        return res.status(200).json({msg:"Notes Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getDataNotesById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from notes where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
