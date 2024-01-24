import { Button, Card, CardContent, Grid, Typography, TextField } from '@mui/material'

export default function CurpList() {
    return (
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={3}>
                <Card sx={{ mt: 5 }} style={{
                    backgroundColor: '#1e272e',
                    padding: '1rem',
                }}>
                    <Typography variant='5' textAlign='center' color='white'>Agregar CURP</Typography>
                    <CardContent>
                        <form>
                            <TextField variant="filled" label="CURP" sx={{ display: 'block', margin: '.5rem 0' }}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}
                            />
                            <TextField variant="filled" label="Nombre" multiline rows={4} sx={{ display: 'block', margin: '.5rem 0' }}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }} />
                            <Button variant='contained' color='primary' type='submit'>
                                Guardar
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}